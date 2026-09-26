import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Your privacy matters.</h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600">
          <p>
            JobFinder collects personal information that helps us provide job opportunities, manage applications,
            and improve your experience on our platform.
          </p>

          <p>
            We use your data to create your profile, match you with relevant roles, communicate updates, and secure
            your account. We do not sell personal information to third parties.
          </p>

          <p>
            By continuing to use JobFinder, you agree to our data handling practices as described in this policy.
            You may update your account preferences at any time from your profile settings.
          </p>

          <p>
            We retain account information only as long as needed to support the services we provide and comply with
            applicable legal requirements.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/" className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
