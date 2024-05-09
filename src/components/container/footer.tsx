import Link from "next/link";
import { AppLogo } from "@/components/shared/app-logo";

const navigationData = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact us",
    href: "/contact-us",
  },
  {
    title: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
];

export function Footer() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-10 bg-blue-800 text-white py-8 px-3">
        <Link href="/">
          <AppLogo fill="white" />
        </Link>
        <ul className="flex flex-wrap items-center justify-between md:gap-x-8 gap-y-3 text-xs md:text-sm w-full md:w-max">
          {navigationData.map((nav) => (
            <Link key={nav.href} href={nav.href} className="whitespace-nowrap">
              <li>{nav.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-3 gap-x-1 bg-blue-900 text-white py-3 px-3">
        <p className="text-xs md:text-sm">
          Bulletvisa is designed, built, and backed by Respawn Technologies Pvt
          Ltd. Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
