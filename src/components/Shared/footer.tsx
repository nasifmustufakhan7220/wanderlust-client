import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const contact = ["786 901 1622", "info@wandarland.com"];

function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="#"
        aria-label="X"
        className="text-white transition-colors hover:text-[#15A1BF]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-white transition-colors hover:text-[#15A1BF]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-white transition-colors hover:text-[#15A1BF]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="mx-auto w-full max-w-300 px-6 pt-28 pb-10">
        <div>
          <p className="font-bold text-[clamp(3.5rem,7vw,5.5rem)] leading-none">
            Wanderlast
          </p>
          <p className="mt-3 text-[17px] text-[#a3a3a3]">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr_1fr_1fr] md:gap-x-25 md:gap-y-0">
          <div>
            <p className="text-[15px] tracking-wider uppercase">
              Newsletter
            </p>
            <p className="mt-3 text-[14px] text-[#9a9a9a]">
              Subscribe for exclusive travel deals or inspiration.
            </p>
            <div className="mt-4 flex h-11 w-full max-w-75items-center justify-between rounded bg-[#404040] px-5">
              <span className="text-[16px] text-[#d0d0d0]">Enter email</span>
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </div>

          <div>
            <p className="text-[15px] tracking-wider uppercase">Quick Links</p>
            <ul className="mt-6 space-y-5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] text-[#c4c4c4] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[15px] tracking-wider uppercase">Support</p>
            <ul className="mt-6 space-y-5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] text-[#c4c4c4] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[15px] tracking-wider uppercase">Contact Us</p>
            <ul className="mt-6 space-y-5">
              {contact.map((item) => (
                <li key={item} className="text-[16px] text-[#c4c4c4]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 pb-2">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[14px] text-[#a3a3a3]">
              © 2026 Wanderlust. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
