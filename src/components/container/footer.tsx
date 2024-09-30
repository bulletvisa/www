import Link from "next/link";
import { AppLogo } from "@/components/shared/app-logo";
import { ApplicationCard } from "../shared/application-card";
import { useIsMobileScreen } from "@/hooks/use-is-mobile-screen";
import { CHAT_WITH_US_URL } from "@/constants";

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
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Chat with us",
    href: CHAT_WITH_US_URL,
  },
  {
    title: "Contact us",
    href: "/contact-us",
  },
  {
    title: "Refund & cancellation policy",
    href: "/refund-and-cancellation-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export function Footer() {
  const isMobileScreen = useIsMobileScreen();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-10 bg-blue-800 text-white py-8 px-3">
        <Link href="/">
          <AppLogo fill="white" />
        </Link>
        <ul className="flex flex-col md:flex-row flex-wrap font-light justify-between md:gap-x-8 gap-y-3 w-full md:w-max">
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

      {isMobileScreen && <div className="h-64" />}
    </div>
  );
}
