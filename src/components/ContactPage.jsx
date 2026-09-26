import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  UserRound,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

export default function ContactPage({ data }) {
  const {
    profile,
    hero,
    enquiry,
    form,
    cta,
  } = data;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-4 py-20 text-white">

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Mail size={30} />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            {hero.description}
          </p>

        </div>

      </section>

      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================================= */}
          {/* PROFILE DETAILS */}
          {/* ================================= */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <UserRound size={30} />
              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Contact Profile
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {profile.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {profile.role}
                </p>

              </div>

            </div>

            <div className="my-7 h-px bg-slate-100" />

            <div className="space-y-4">

              <ContactItem
                icon={<Mail size={21} />}
                title="Email Address"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />

              <ContactItem
                icon={<Phone size={21} />}
                title="Phone Number"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              />

              <ContactItem
                icon={<MapPin size={21} />}
                title="Location"
                value={profile.address}
              />

            </div>

            {/* PROFESSIONAL ENQUIRY */}

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

              <div className="flex gap-3">

                <BriefcaseBusiness
                  size={22}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>

                  <h3 className="font-bold text-slate-900">
                    {enquiry.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {enquiry.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================================= */}
          {/* CONTACT FORM */}
          {/* ================================= */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="mb-7">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                {form.label}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {form.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {form.description}
              </p>

            </div>

            <form className="space-y-5">

              {/* NAME */}

              <FormInput
                id="name"
                type="text"
                label={form.fields.name.label}
                placeholder={
                  form.fields.name.placeholder
                }
              />

              {/* EMAIL */}

              <FormInput
                id="email"
                type="email"
                label={form.fields.email.label}
                placeholder={
                  form.fields.email.placeholder
                }
              />

              {/* SUBJECT */}

              <FormInput
                id="subject"
                type="text"
                label={form.fields.subject.label}
                placeholder={
                  form.fields.subject.placeholder
                }
              />

              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {form.fields.message.label}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={
                    form.fields.message.placeholder
                  }
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-lg"
              >
                {form.buttonText}

                <ArrowRight size={18} />
              </button>

            </form>

            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
              {form.privacyText}
            </p>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* BOTTOM CTA */}
      {/* ================================= */}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 px-6 py-9 text-center text-white sm:px-10">

          <h2 className="text-2xl font-bold sm:text-3xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            {cta.description}
          </p>

          <Link
            href={cta.buttonLink}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
          >
            {cta.buttonText}

            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}

/* ================================= */
/* CONTACT ITEM */
/* ================================= */

function ContactItem({
  icon,
  title,
  value,
  href,
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-100 hover:bg-blue-50/60">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-slate-800">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}

/* ================================= */
/* FORM INPUT */
/* ================================= */

function FormInput({
  id,
  type,
  label,
  placeholder,
}) {
  return (
    <div>

      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      />

    </div>
  );
}