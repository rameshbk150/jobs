
import HeroSection from "@/components/HeroSection";
import { jobsData } from "@/data/DataSite";
import { companiesData } from "@/data/Companies";
import JobCard from "@/components/JobCard";
import CompanyCard from "@/components/CompanyCard";
import Link from "next/link";
import ContactPage from "@/components/ContactPage";
import AboutPage from "@/app/about/page";
import { contactData } from "@/data/contactData";

const stats = [
  { label: "Active Jobs", value: "5,000+" },
  { label: "Partner Companies", value: "120+" },
  { label: "Average Response", value: "24h" },
];

// Fetch jobs from backend API
async function getJobs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    return jobsData;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/+$/, "")}/api/jobs`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.status}`);
    }

    const result = await response.json();

    // Supports an array, { data: [...] }, and { jobs: [...] } API responses.
    const jobs = Array.isArray(result)
      ? result
      : result.data || result.jobs;

    if (!Array.isArray(jobs)) {
      throw new Error("Invalid jobs API response");
    }

    return jobs;
  } catch (error) {
    console.error("Jobs API Error:", error);
    return jobsData;
  }
}

export default async function Home() {
  const jobs = await getJobs();

  return (
    <>
      <main className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Latest Jobs */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Discover opportunities
            </p>

            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Latest Opening Jobs
            </h1>
          </div>

          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            View All Jobs
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-3xl font-bold text-slate-900">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* API Job Cards */}
        {jobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {jobs.slice(0, 3).map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <h3 className="text-lg font-semibold text-slate-800">
              No Jobs Available
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              New opportunities will be available soon.
            </p>
          </div>
        )}
      </section>

      {/* Top Companies */}
      <section className="mt-6 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Top Employers
              </p>

              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Top Companies
              </h2>
            </div>

            <Link
              href="/companies"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
            >
              Explore All Companies
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companiesData.slice(0, 3).map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
              />
            ))}
          </div>
        </div>
      </section>

      </main>
      <AboutPage />
      <ContactPage data={contactData} />
    </>
  );
}
