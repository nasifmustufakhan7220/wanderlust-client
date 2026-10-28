"use client";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "../ui/button";
const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destinaton", href: "/add-destination" },
  { label: "My Bookings", href: "/my-booking" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  return (
    <header className="absolute top-3 right-3 left-3 z-20 rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
      <nav className="flex h-14 items-center justify-between px-10">
        <ul className="flex items-center gap-8">
          {leftLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[17px] font-medium transition-colors hover:text-[#15A1BF] ${
                  pathname === `${link.href}`
                    ? "text-[#15A1BF]"
                    : "text-neutral-900"
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

        <ul className="flex items-center gap-5">
          <li>
            <Link
              href="/profile"
              className="flex gap-1.5 text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
            >
              <UserRound size={18} strokeWidth={2} />
              Profile
            </Link>
          </li>

          {isPending ? <li><Skeleton className="h-10 w-10 rounded-full" /></li>: session?.user ? (
            <Popover>
              <PopoverTrigger
                render={
                  <Avatar className={`cursor-pointer`}>
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={session?.user?.image as string}
                    />
                    <AvatarFallback>
                      {session?.user?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                }
              ></PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>{session?.user?.name}</PopoverTitle>
                  <PopoverDescription>
                    {session?.user?.email}
                  </PopoverDescription>
                  
                  <Button
                    onClick={() =>
                      signOut({
                        fetchOptions: {
                          onSuccess: () => router.push("/sign-in"),
                        },
                      })
                    }
                    variant={"destructive"}
                    className="cursor-pointer"
                  >
                    Sing out
                  </Button>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <li>
                <Link
                  href="/sign-in"
                  className="text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#15A1BF]"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
