import { spawn, execSync } from 'node:child_process';

const killStaleProcesses = () => {
  try {
    const output = execSync(
      "powershell -NoProfile -Command \"Get-NetTCPConnection -LocalPort 3001,5000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }\"",
      { stdio: 'pipe', encoding: 'utf8' }
    );
    if (output && output.trim()) {
      console.log(output.trim());
    }
  } catch (error) {
    // Ignore stale-port cleanup failures; they mean there were no active listeners.
  }
};

const start = (command, args) => {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`${command} exited with signal ${signal}`);
    }
    process.exit(code ?? 1);
  });

  return child;
};

const openBrowser = () => {
  if (process.platform !== 'win32') return;

  setTimeout(() => {
    spawn('cmd', ['/c', 'start', '', 'http://localhost:3001'], {
      stdio: 'ignore',
      detached: true,
    });
  }, 4000);
};

killStaleProcesses();

const backend = start('npm', ['run', 'backend']);
const frontend = start('npm', ['run', 'frontend']);
openBrowser();

const closeAll = () => {
  backend.kill('SIGTERM');
  frontend.kill('SIGTERM');
  process.exit(0);
};

process.on('SIGINT', closeAll);
process.on('SIGTERM', closeAll);
