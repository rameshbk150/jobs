"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  LogIn,
} from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // ============================================
  // INPUT CHANGE
  // ============================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (message.text) {
      setMessage({
        type: "",
        text: "",
      });
    }
  };

  // ============================================
  // LOGIN
  // ============================================

  const handleLogin = async (event) => {
    event.preventDefault();

    const email =
      formData.email.trim().toLowerCase();

    const password =
      formData.password;

    if (!email || !password) {
      setMessage({
        type: "error",
        text: "Email and password are required.",
      });

      return;
    }

    try {
      setLoading(true);

      setMessage({
        type: "",
        text: "",
      });

      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // ========================================
      // LOGIN FAILED
      // ========================================

      if (!response.ok) {
        setMessage({
          type: "error",
          text:
            data.message ||
            "Invalid email or password.",
        });

        return;
      }

      // ========================================
      // CHECK USER RESPONSE
      // ========================================

      if (!data.user) {
        setMessage({
          type: "error",
          text:
            "Login succeeded but user data was not returned.",
        });

        return;
      }

      // ========================================
      // SAVE USER
      // ========================================

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // ========================================
      // SAVE TOKEN
      // ========================================

      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        );
      }

      // ========================================
      // TELL HEADER USER LOGGED IN
      // ========================================

      window.dispatchEvent(
        new Event("authChanged")
      );

      setMessage({
        type: "success",
        text: "Login successful. Redirecting...",
      });

      // ========================================
      // REDIRECT HOME
      // ========================================

      setTimeout(() => {
        router.push("/");
      }, 500);

    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      setMessage({
        type: "error",
        text:
          "Unable to connect to the server.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-4 py-12">

      {/* BACKGROUND */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl" />

      <div className="relative w-full max-w-md">

        {/* BACK HOME */}

        <Link
          href="/"
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-zinc-600
            transition
            hover:text-black
          "
        >
          ← Back to home
        </Link>

        {/* LOGIN CARD */}

        <div
          className="
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-6
            shadow-xl
            shadow-zinc-200/60
            sm:p-8
          "
        >

          {/* HEADER */}

          <div className="mb-8 text-center">

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-600
                text-white
                shadow-lg
                shadow-blue-600/20
              "
            >
              <LogIn size={26} />
            </div>

            <h1
              className="
                mt-5
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Welcome Back
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Sign in to access your account
            </p>

          </div>

          {/* MESSAGE */}

          {message.text && (
            <div
              className={`
                mb-5
                rounded-xl
                border
                px-4
                py-3
                text-sm
                font-medium

                ${
                  message.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }
              `}
            >
              {message.text}
            </div>
          )}

          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* EMAIL */}

            <div>

              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-zinc-800
                "
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-400
                  "
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-300
                    bg-white
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-black
                    outline-none
                    transition

                    placeholder:text-zinc-400

                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <div className="mb-2 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="
                    block
                    text-sm
                    font-semibold
                    text-zinc-800
                  "
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="
                    text-xs
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    hover:underline
                  "
                >
                  Forgot Password?
                </Link>

              </div>

              <div className="relative">

                <Lock
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-400
                  "
                />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-300
                    bg-white
                    py-3.5
                    pl-11
                    pr-12
                    text-sm
                    text-black
                    outline-none
                    transition

                    placeholder:text-zinc-400

                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (value) => !value
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-400
                    transition
                    hover:text-blue-600
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-3.5
                font-semibold
                text-white
                shadow-md
                shadow-blue-600/20
                transition

                hover:bg-blue-700
                hover:shadow-lg

                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading && (
                <LoaderCircle
                  size={19}
                  className="animate-spin"
                />
              )}

              {loading
                ? "Checking account..."
                : "Sign In"}

            </button>

          </form>

          {/* REGISTER */}

          <div
            className="
              mt-8
              border-t
              border-zinc-100
              pt-6
              text-center
            "
          >

            <p className="text-sm text-zinc-600">

              Don&apos;t have an account?{" "}

              <Link
                href="/register"
                className="
                  font-semibold
                  text-blue-600
                  underline-offset-4
                  transition
                  hover:text-blue-700
                  hover:underline
                "
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>
  );
}