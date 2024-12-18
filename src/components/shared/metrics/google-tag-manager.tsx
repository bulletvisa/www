import { GoogleTagManager as NextGoogleTagManager } from "@next/third-parties/google";
import { GOOGLE_TAG_ID } from "@/constants";

export const GoogleTagManager = () => {
  return <NextGoogleTagManager gtmId={GOOGLE_TAG_ID} />;
};
