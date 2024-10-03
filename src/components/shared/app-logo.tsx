import Image from "next/image";
import { MAIN_WEBSITE_URL } from "@/constants";

type AppLogoProps = {
  fill?: "blue" | "white";
};

export const AppLogo: React.FC<AppLogoProps> = ({ fill = "blue" }) => {
  return (
    <Image
      src={
        fill === "blue"
          ? "/assets/images/app-logo.png"
          : "/assets/images/app-logo-white.png"
      }
      width={100}
      height={100}
      alt={MAIN_WEBSITE_URL}
      className="w-16 md:w-24"
    />
  );
};
