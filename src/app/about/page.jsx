import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | RB Group",
  description:
    "Learn more about RB Group, our mission, vision, values and how we connect talented candidates with better career opportunities.",
};

const iconMap = {
  briefcase: BriefcaseBusiness,
  user: UserRoundCheck,
  globe: Globe2,
  target: Target,
  shield: ShieldCheck,
  handshake: HeartHandshake,
  lightbulb: Lightbulb,
  growth: TrendingUp,
};

const aboutData = {
  companyName: "RB Group",

  hero: {
    badge: "About RB Group",
    title: "Connecting Talent",
    highlightedTitle: "With Better Opportunities",
    description:
      "RB Group connects talented job seekers with trusted employers and meaningful career opportunities. We make recruitment simple, transparent and effective.",

    primaryButton: {
      label: "Explore Jobs",
      href: "/jobs",
    },

    secondaryButton: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  companyCard: {
    badge: "Trusted Recruitment Partner",
    title: "Building Careers. Growing Businesses.",
    description:
      "We help candidates discover suitable career opportunities while helping companies find the right talent for their teams.",

    features: [
      {
        icon: "briefcase",
        title: "Quality Opportunities",
        description:
          "Find suitable jobs from growing and trusted businesses.",
      },
      {
        icon: "user",
        title: "Candidate Focused",
        description:
          "We connect people with opportunities matching their skills.",
      },
      {
        icon: "globe",
        title: "Growing Network",
        description:
          "Explore opportunities across different industries and locations.",
      },
    ],
  },

  stats: [
    {
      value: "500+",
      label: "Job Opportunities",
    },
    {
      value: "100+",
      label: "Hiring Partners",
    },
    {
      value: "1K+",
      label: "Candidates",
    },
    {
      value: "10+",
      label: "Industries",
    },
  ],

  story: {
    cardTitle: "Our Journey",
    cardDescription:
      "RB Group was created with one clear purpose — making job searching and recruitment easier, more transparent and more effective.",

    promiseTitle: "Our Promise",
    promiseDescription:
      "We focus on genuine opportunities, professional communication and meaningful connections between employers and candidates.",

    label: "Our Story",
    title: "Helping People Build Better Careers",
    description:
      "Finding the right job can be difficult. RB Group simplifies the process by bringing useful and relevant job opportunities together in one place.",

    secondDescription:
      "We also support businesses by helping them connect with suitable candidates and build stronger teams.",
  },

  missionVision: [
    {
      icon: "target",
      title: "Our Mission",
      description:
        "To connect talented candidates with genuine job opportunities through a simple and reliable recruitment platform.",
    },
    {
      icon: "growth",
      title: "Our Vision",
      description:
        "To become a trusted recruitment platform that creates long-term growth opportunities for candidates and businesses.",
    },
  ],

  valuesSection: {
    label: "Our Values",
    title: "What Drives RB Group",
    description:
      "Strong values guide our relationships with candidates, employers and our growing professional community.",
  },

  values: [
    {
      icon: "shield",
      title: "Trust",
      description:
        "Transparency and reliability are at the heart of everything we do.",
    },
    {
      icon: "handshake",
      title: "Partnership",
      description:
        "We work closely with candidates and employers to create better results.",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      description:
        "We continuously improve how people discover jobs and companies find talent.",
    },
    {
      icon: "growth",
      title: "Growth",
      description:
        "We believe every opportunity should help people and businesses grow.",
    },
  ],

  whyChoose: {
    label: "Why Choose Us",
    title: "A Better Way to Find Opportunities",
    description:
      "RB Group provides a simple, professional and candidate-focused job search experience.",

    button: {
      label: "Browse Jobs",
      href: "/jobs",
    },

    points: [
      "Simple job search experience",
      "Relevant career opportunities",
      "Trusted employer connections",
      "Candidate-focused approach",
      "Easy application process",
      "Opportunities across industries",
    ],
  },
};

export default function AboutPage() {
  const {
    companyName,
    hero,
    companyCard,
    stats,
    story,
    missionVision,
    valuesSection,
    values,
    whyChoose,
  } = aboutData;

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-200">
              <Sparkles size={16} />
              {hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}

              <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {hero.highlightedTitle}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryButton.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {hero.primaryButton.label}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={hero.secondaryButton.href}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {hero.secondaryButton.label}
              </Link>
            </div>
          </div>

          {/* Company Card */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
            <div className="rounded-[24px] bg-white p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Building2 size={28} />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <BadgeCheck size={14} />
                  {companyCard.badge}
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-blue-600">
                {companyName}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                {companyCard.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {companyCard.description}
              </p>

              <div className="mt-7 space-y-3">
                {companyCard.features.map((feature) => {
                  const Icon = iconMap[feature.icon];

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-7 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-slate-100 px-5 py-7 text-center last:border-0 sm:border-r"
              >
                <p className="text-3xl font-bold text-slate-950">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-[80px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Users size={27} />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-white">
                {story.cardTitle}
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                {story.cardDescription}
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
                  {story.promiseTitle}
                </p>

                <p className="mt-2 leading-7 text-slate-200">
                  {story.promiseDescription}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {story.label}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {story.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {story.description}
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              {story.secondDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {missionVision.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {valuesSection.label}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
              {valuesSection.title}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {valuesSection.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = iconMap[value.icon];

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {whyChoose.label}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
              {whyChoose.title}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {whyChoose.description}
            </p>

            <Link
              href={whyChoose.button.href}
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              {whyChoose.button.label}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <p className="text-sm font-medium leading-6 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
            Start Your Career Journey
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find the Right Opportunity With RB Group
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Explore available jobs and take the next step toward your career
            goals.
          </p>

          <Link
            href="/jobs"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
          >
            View Available Jobs
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}