"use client"
import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="absolute top-3 right-3 left-3 z-20 rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
      <nav className="flex h-14 items-center justify-between px-10">
        <ul className="flex items-center gap-8">
          {leftLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[17px] font-medium transition-colors hover:text-[#15A1BF] ${
                  pathname === `${link.href}` ? "text-[#15A1BF]" : "text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" aria-label="Wanderlast home">
          <Image
            src="/Wanderlast.png"
            alt="Wanderlast"
            width={542}
            height={80}
            priority
            className="h-auto w-37.5"
          />
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
            >
              <UserRound size={18} strokeWidth={2} />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}