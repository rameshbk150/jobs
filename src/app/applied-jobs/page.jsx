"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppliedJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }

    const saved = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setJobs(saved);
  }, []);

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">Login Required</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Sign in to see your applied jobs and track your application status.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Applications</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">My Applied Jobs</h1>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-800">No jobs applied yet.</p>
            <p className="mt-2 text-sm text-slate-600">Start applying to roles that match your profile.</p>
            <Link href="/jobs" className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                    <p className="text-sm text-slate-600">{job.company}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Applied
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.workMode}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
