
import Link from "next/link";
import { Compass, ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f9fa] px-4 py-16">
      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#159fba]/10 blur-3xl" />
      <div className="mt-20 absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#159fba]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Logo */}
        

        {/* 404 Illustration */}
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          <span className="text-[150px] font-extrabold leading-none tracking-tighter text-[#159fba]/10 sm:text-[220px]">
            404
          </span>

          <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-[#159fba]/10 sm:h-32 sm:w-32">
            <Compass
              size={72}
              strokeWidth={1.3}
              className="text-[#159fba] sm:h-24 sm:w-24"
            />
          </div>

          <MapPin
            size={32}
            className="absolute right-[18%] top-2 rotate-12 text-[#159fba]"
          />
        </div>

        {/* Message */}
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#159fba]">
          Lost your way?
        </p>

        <h1 className="mb-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Oops! Invalid Route
          <br />
          <span className="text-[#159fba]">Not Found</span>
        </h1>

        <p className="mx-auto mb-9 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
          Looks like you have wandered off the map. The page
          you are looking for may have been moved or no longer
          exists. Let&apos;s get you back to your next adventure!
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-[#159fba] px-7 py-4 font-semibold text-white shadow-lg shadow-[#159fba]/20 transition hover:bg-[#1289a0]"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <Link
            href="/destinations"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-[#159fba] hover:text-[#159fba]"
          >
            <Compass size={20} />
            Explore Destinations
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          Every great journey starts somewhere. 🌍
        </p>
      </div>
    </main>
  );
}
