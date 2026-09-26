"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import JobCard from "@/components/JobCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-12" />}>
      <JobsPageContent />
    </Suspense>
  );
}

function JobsPageContent() {
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get("q") || "";

  const [search, setSearch] = useState(urlSearch);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    type: "",
    workMode: "",
    category: "",
    experience: "",
    location: "",
  });

  // ======================================================
  // FETCH REAL JOBS API
  // ======================================================

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/jobs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const result = await response.json();
        console.log("Jobs API Result:", result);

        // Supports both:
        // [ ...jobs ]
        // { data: [ ...jobs ] }
        // { jobs: [ ...jobs ] }

        const fetchedJobs = Array.isArray(result)
          ? result
          : result.data || result.jobs || [];

        setJobs(fetchedJobs);
      } catch (err) {
        console.error("Jobs API Error:", err);
        setError("Unable to load jobs. Please try again later.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // ======================================================
  // FILTER OPTIONS FROM API DATA
  // ======================================================

  const jobTypes = [
    ...new Set(jobs.map((job) => job.type).filter(Boolean)),
  ];

  const workModes = [
    ...new Set(jobs.map((job) => job.workMode).filter(Boolean)),
  ];

  const categories = [
    ...new Set(jobs.map((job) => job.category).filter(Boolean)),
  ];

  const experiences = [
    ...new Set(jobs.map((job) => job.experience).filter(Boolean)),
  ];

  const locations = [
    ...new Set(jobs.map((job) => job.location).filter(Boolean)),
  ];

  // ======================================================
  // FILTER JOBS
  // ======================================================

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.company,
        job.location,
        job.category,
        job.experience,
        job.qualification,
        job.salary,
        job.description,
        ...(job.skills || []),
        ...(job.responsibilities || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      const matchesType =
        !filters.type || job.type === filters.type;

      const matchesWorkMode =
        !filters.workMode || job.workMode === filters.workMode;

      const matchesCategory =
        !filters.category || job.category === filters.category;

      const matchesExperience =
        !filters.experience || job.experience === filters.experience;

      const matchesLocation =
        !filters.location || job.location === filters.location;

      return (
        matchesSearch &&
        matchesType &&
        matchesWorkMode &&
        matchesCategory &&
        matchesExperience &&
        matchesLocation
      );
    });
  }, [jobs, search, filters]);

  // ======================================================
  // FILTER CHANGE
  // ======================================================

  const handleFilterChange = (filterName, value) => {
    setFilters((previous) => ({
      ...previous,
      [filterName]: value,
    }));
  };

  // ======================================================
  // CLEAR FILTERS
  // ======================================================

  const clearFilters = () => {
    setSearch("");

    setFilters({
      type: "",
      workMode: "",
      category: "",
      experience: "",
      location: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Latest Jobs
          </h1>

          <p className="mt-2 text-gray-500">
            Find the latest job opportunities from top companies.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search jobs, companies, skills..."
              className="
                w-full rounded-xl border border-gray-200
                bg-white px-5 py-4 text-gray-900 shadow-sm
                outline-none transition placeholder:text-gray-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-sm font-medium text-gray-400
                  hover:text-gray-700
                "
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FILTERS */}
        <div className="
          mb-8 rounded-2xl border border-gray-200
          bg-white p-5 shadow-sm
        ">
          <div className="
            mb-4 flex items-center justify-between
          ">
            <h2 className="text-lg font-semibold text-gray-900">
              Filter Jobs
            </h2>

            <button
              type="button"
              onClick={clearFilters}
              className="
                text-sm font-medium text-blue-600
                hover:text-blue-800
              "
            >
              Clear Filters
            </button>
          </div>

          <div className="
            grid gap-4 sm:grid-cols-2 lg:grid-cols-5
          ">
            <select
              value={filters.type}
              onChange={(event) =>
                handleFilterChange("type", event.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Job Types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              value={filters.workMode}
              onChange={(event) =>
                handleFilterChange("workMode", event.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Work Modes</option>
              {workModes.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>

            <select
              value={filters.category}
              onChange={(event) =>
                handleFilterChange("category", event.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={filters.experience}
              onChange={(event) =>
                handleFilterChange("experience", event.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Experience</option>
              {experiences.map((experience) => (
                <option key={experience} value={experience}>
                  {experience}
                </option>
              ))}
            </select>

            <select
              value={filters.location}
              onChange={(event) =>
                handleFilterChange("location", event.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
            <p className="text-gray-500">Loading jobs...</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* RESULTS */}
        {!loading && !error && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
                </h2>

                {search && (
                  <p className="mt-1 text-sm text-gray-500">
                    Showing results for{" "}
                    <span className="font-medium text-gray-700">
                      "{search}"
                    </span>
                  </p>
                )}
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </div>
            ) : (
              <div className="
                rounded-2xl border border-gray-200
                bg-white px-6 py-16 text-center shadow-sm
              ">
                <div className="mx-auto mb-4 text-5xl">
                  🔍
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  No jobs found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-gray-500">
                  We couldn't find any jobs matching your search
                  or selected filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-6 rounded-lg bg-blue-600
                    px-5 py-3 text-sm font-semibold
                    text-white transition hover:bg-blue-700
                  "
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </>
        )}

      </section>
    </main>
  );
}