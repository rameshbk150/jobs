import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = resolve(fileURLToPath(new URL('.', import.meta.url)));
const projectRoot = resolve(scriptDirectory, '..');
const frontendLockFile = resolve(projectRoot, '.next', 'dev', 'lock');

if (existsSync(frontendLockFile)) {
  const frontendLock = JSON.parse(readFileSync(frontendLockFile, 'utf8'));
  try {
    process.kill(frontendLock.pid, 0);
    const frontendUrl = frontendLock.appUrl || `http://localhost:${frontendLock.port}`;
    try {
      const response = await fetch(frontendUrl, {
        signal: AbortSignal.timeout(5000),
      });
      console.log(`Frontend is already responding at ${frontendUrl} (HTTP ${response.status}).`);
      process.exit(0);
    } catch (error) {
      console.error(
        `Frontend process ${frontendLock.pid} owns the dev lock but is not responding at ${frontendUrl}. ` +
        `Stop that process before starting again. ${error.message}`
      );
      process.exit(1);
    }
  } catch (error) {
    if (error.code !== 'ESRCH') throw error;
  }
}

const start = (command, args, options = {}) => {
  const child = spawn(command, args, {
    stdio: 'inherit',
    cwd: options.cwd || projectRoot,
    env: options.env || process.env,
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`${command} exited with signal ${signal}`);
    }
    if (options.exitOnExit !== false) {
      process.exit(code ?? 1);
    }
  });

  return child;
};

const isPortAvailable = (candidatePort) =>
  new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolvePort(false);
        return;
      }
      reject(error);
    });
    server.listen(candidatePort, () => {
      server.close(() => resolvePort(true));
    });
  });

const readBackendPort = (backendRoot) => {
  const envFile = resolve(backendRoot, '.env');
  if (!existsSync(envFile)) return '5000';

  const match = readFileSync(envFile, 'utf8').match(/^\s*PORT\s*=\s*["']?(\d+)/m);
  return match?.[1] || '5000';
};

const openBrowser = () => {
  if (process.platform !== 'win32' || process.env.CI) return;

  setTimeout(() => {
    spawn('cmd', ['/c', 'start', '', `http://localhost:${port}`], {
      stdio: 'ignore',
      detached: true,
    });
  }, 4000);
};

const requestedPort = process.env.PORT || '3001';
if (!(await isPortAvailable(Number(requestedPort)))) {
  console.error(
    `Cannot start the frontend: port ${requestedPort} is already in use. ` +
    `If this project is already running, use that server; otherwise stop the process using the port or set PORT to an unused port.`
  );
  process.exit(1);
}
const port = requestedPort;

const backendRoot = resolve(projectRoot, '..', 'backend', 'jobsearch-backend');
const backendEntry = resolve(backendRoot, 'server.js');
const backendPort = process.env.BACKEND_PORT || readBackendPort(backendRoot);
const backendEnv = { ...process.env };
delete backendEnv.PORT;
if (process.env.BACKEND_PORT) backendEnv.PORT = process.env.BACKEND_PORT;

const backend = existsSync(backendEntry) && await isPortAvailable(Number(backendPort))
  ? start(process.execPath, [backendEntry], {
      cwd: backendRoot,
      env: backendEnv,
      exitOnExit: false,
    })
  : null;

if (!backend) {
  if (existsSync(backendEntry)) {
    console.log(`Backend port ${backendPort} is already in use; leaving the existing service untouched.`);
  } else {
    console.warn(`Backend not started: ${backendEntry} was not found. API-dependent features require a backend.`);
  }
}

const frontend = start(process.execPath, [
  resolve(projectRoot, 'node_modules/next/dist/bin/next'),
  'dev',
  '--webpack',
  '--hostname',
  '0.0.0.0',
  '--port',
  port,
], { cwd: projectRoot });
openBrowser();

const closeAll = () => {
  backend?.kill('SIGTERM');
  frontend.kill('SIGTERM');
  process.exit(0);
};

process.on('SIGINT', closeAll);
process.on('SIGTERM', closeAll);
