
"use client";

import CompanyCard from "@/components/CompanyCard";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/companies`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }

        const result = await response.json();

        const fetchedCompanies = Array.isArray(result)
          ? result
          : Array.isArray(result?.data)
            ? result.data
            : Array.isArray(result?.companies)
              ? result.companies
              : Array.isArray(result?.items)
                ? result.items
                : [];

        setCompanies(fetchedCompanies);
      } catch (err) {
        console.error("Companies API Error:", err);
        setError("Unable to load companies. Please try again later.");
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Explore Employers
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Top Companies
            </h1>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Explore leading companies, discover their work culture, and
              find your next career opportunity.
            </p>

            <div className="mt-5 text-sm font-medium text-zinc-500">
              {companies.length} Companies Available
            </div>
          </div>

          {loading && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center text-zinc-500">
              Loading companies...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {companies.map((company, index) => (
                <CompanyCard
                  key={company._id || company.id || index}
                  company={company}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}