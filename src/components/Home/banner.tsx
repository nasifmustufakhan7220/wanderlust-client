import Image from "next/image";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { label: "Location", hint: "Address, City Or Zip" },
  { label: "Date/Duration", hint: "Anytime/3 Days" },
  { label: "Budget", hint: "$0-$3000" },
  { label: "People", hint: "5-10" },
];

export function Banner() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
      <Image
        src="/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" aria-hidden />

      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-32 text-center">
        <h1 className="font-light leading-[1.05] tracking-tight text-white text-[clamp(3.5rem,7.5vw,6rem)]">
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="mt-7 max-w-150 text-[20px] leading-relaxed text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-10 flex items-stretch gap-4">
          <button
            type="button"
            className="group flex h-12 items-center gap-6 bg-[#15A1BF] pr-3 pl-8 text-[15px] font-medium tracking-wider text-white uppercase transition-colors hover:bg-[#128daa]"
          >
            Explore Now
            <span className="flex h-full items-center border-l border-white/25 bg-black/15 px-4">
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button
            type="button"
            className="h-12 bg-white/20 px-8 text-[15px] font-medium tracking-wider text-white uppercase transition-colors hover:bg-white/30"
          >
            View Destination
          </button>
        </div>
      </div>

      <div className="flex w-full">
        {searchFields.map((field, i) => (
          <div
            key={field.label}
            className={`flex flex-1 flex-col justify-center bg-black/50 px-10 py-3 ${
              i > 0 ? "border-l border-white/25" : ""
            }`}
          >
            <span className="text-[17px] font-semibold text-white">
              {field.label}
            </span>
            <span className="mt-0.5 text-[14px] text-white/75">
              {field.hint}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="flex w-42 items-center justify-center bg-[#15A1BF] text-[20px] font-bold text-white transition-colors hover:bg-[#128daa]"
        >
          Search
        </button>
      </div>
    </section>
  );
}
