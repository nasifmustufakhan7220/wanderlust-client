
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f9fa] px-5 py-16">
      <div className="w-full max-w-lg text-center">
        {/* Error Illustration */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-50">
          <div className="absolute inset-2 rounded-full border border-red-100" />

          <AlertTriangle
            size={48}
            strokeWidth={1.5}
            className="text-red-500"
          />
        </div>

        {/* Brand */}
        <Link
          href="/"
          className="mb-8 inline-block text-3xl font-bold tracking-tight text-[#159fba]"
        >
          Wanderlast
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Something went wrong
        </p>

        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Oops! We hit a bump
          <span className="text-[#159fba]">.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          Something unexpected happened while loading this
          page. Don&apos;t worry, your next adventure is still
          waiting for you. Please try again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-[#159fba] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1289a0] focus:outline-none focus:ring-2 focus:ring-[#159fba] focus:ring-offset-2"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-[#159fba] hover:text-[#159fba]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Wanderlast · Your next adventure awaits.
        </p>
      </div>
    </main>
  );
}
