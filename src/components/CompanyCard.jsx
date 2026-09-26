import Link from "next/link";
import {
  Building2,
  MapPin,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const getCompanyLogo = (logo) => {
  if (!logo) return "/logo/default-company.png";

  if (logo.startsWith("http://") || logo.startsWith("https://")) {
    return logo;
  }

  if (logo.startsWith("/")) {
    return logo;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}${logo}`;
};

export default function CompanyCard({ company }) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl">
      {/* Top */}
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white p-2">
          <img
            src={getCompanyLogo(company.logo)}
            alt={`${company.name} logo`}
            width={60}
            height={60}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Company Info */}
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-zinc-900 transition group-hover:text-black">
            {company.name}
          </h3>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Building2 size={15} />
              {company.industry}
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {company.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">
        {company.description}
      </p>

      {/* Stats */}
      <div className="mt-5 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
          <Users size={16} />
          <span>{company.employees}</span>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
          <Briefcase size={16} />
          <span>{company.jobs} Open Jobs</span>
        </div>
      </div>

      {/* Action */}
      <div className="mt-6 border-t border-zinc-100 pt-5">
        <Link
          href={`/companies/${company.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          View Company

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}