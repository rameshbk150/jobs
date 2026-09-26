import Link from "next/link";

export default function ProfileSettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Account</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Settings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Profile Preferences</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <label className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span>Email notifications</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span>Job alert notifications</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span>Marketing updates</span>
                <input type="checkbox" className="h-4 w-4" />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Security</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 px-4 py-3">
                <p className="font-medium text-slate-800">Password</p>
                <p className="mt-1 text-slate-500">Last changed 2 months ago</p>
              </div>
              <div className="rounded-xl border border-slate-200 px-4 py-3">
                <p className="font-medium text-slate-800">Two-factor auth</p>
                <p className="mt-1 text-slate-500">Not enabled</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/profile/edit" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Edit Profile
          </Link>
          <Link href="/profile" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Back to Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
