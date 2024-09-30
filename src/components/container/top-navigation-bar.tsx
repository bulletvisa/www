import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/shared/app-logo";
import {
  MAIN_WEBSITE_URL,
  ACCOUNT_WEBSITE_URL,
  CHAT_WITH_US_URL,
} from "@/constants";

export function TopNavigationBar() {
  return (
    <div className="bg-white py-3 border-b">
      <div className="flex items-center justify-between px-3 md:px-16">
        <Link href={MAIN_WEBSITE_URL}>
          <AppLogo />
        </Link>

        <div className="flex items-center gap-2">
          <Link href={CHAT_WITH_US_URL}>
            <Button
              variant="outline"
              className="text-xs md:text-sm h-8 md:h-10 px-3 md:px-4"
            >
              Chat with us
            </Button>
          </Link>

          <Link href={`${ACCOUNT_WEBSITE_URL}/applications`}>
            <Button
              variant="secondary"
              className="text-xs md:text-sm h-8 md:h-10 px-3 md:px-4"
            >
              My Applications
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
