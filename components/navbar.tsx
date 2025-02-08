import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { links } from "@/config";

import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-[#212f3d] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />

        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          MeetNest
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};
