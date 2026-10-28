import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="relative isolate flex min-h-105 items-center justify-center overflow-hidden px-6 text-center">
      <Image
        src="/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden />

      <div className="flex flex-col items-center">
        <h2 className="font-light leading-tight text-white text-[clamp(2.5rem,4vw,3.25rem)]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-[19px] text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>
        <button
          type="button"
          className="mt-11 inline-flex h-12 items-center gap-6 rounded bg-white px-9 text-[15px] font-medium tracking-wide text-[#111] uppercase transition-colors hover:bg-white/90"
        >
          Book Your Trip Today
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
