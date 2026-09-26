"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              JobFinder
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Find your next career opportunity with top companies across India.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Candidates
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/jobs" className="hover:text-white">
                Browse Jobs
              </Link>

              <Link href="/companies" className="hover:text-white">
                Companies
              </Link>

              <Link href="/profile" className="hover:text-white">
                My Profile
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>

              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>

              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:support@jobfinder.in">
                  support@jobfinder.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-blue-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} JobFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}