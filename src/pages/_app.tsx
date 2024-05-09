import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GT-W6VNHM2S" />
    </>
  );
}
