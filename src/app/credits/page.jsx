import Link from "next/link";

export default function CreditsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            JobFinder Credits
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Upgrade Your Career Access
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Buy credits to unlock premium job alerts, profile visibility, and advanced application features.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Starter</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">₹299</span>
              <span className="text-slate-500">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• 10 job applications</li>
              <li>• 1 profile boost</li>
              <li>• Standard alerts</li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
              Choose Starter
            </button>
          </div>

          <div className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Most Popular
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pro</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">₹799</span>
              <span className="text-slate-500">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• 40 job applications</li>
              <li>• Priority matching</li>
              <li>• Premium profile badge</li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Choose Pro
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">₹1499</span>
              <span className="text-slate-500">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Unlimited applications</li>
              <li>• Career growth dashboard</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
              Choose Business
            </button>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold">Need a custom plan?</h2>
          <p className="mt-3 text-slate-300">
            Contact our team for enterprise plans and recruitment support.
          </p>
          <Link href="/contact" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
            Talk to Sales
          </Link>
        </div>
      </div>
    </main>
  );
}
