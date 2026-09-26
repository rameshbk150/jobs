import HeroSection from "@/components/HeroSection";
import { jobsData } from "@/data/DataSite";
import { companiesData } from "@/data/Companies";
import JobCard from "@/components/JobCard";
import CompanyCard from "@/components/CompanyCard";
import Link from "next/link";

const stats = [
  { label: "Active Jobs", value: "5,000+" },
  { label: "Partner Companies", value: "120+" },
  { label: "Average Response", value: "24h" },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Discover opportunities
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Latest opening jobs
            </h1>
          </div>

          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            View all jobs
          </Link>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobsData.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section className="mt-6 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Top employers
              </p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Top Companies
              </h2>
            </div>

            <Link
              href="/companies"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
            >
              Explore companies
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companiesData.slice(0, 3).map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}