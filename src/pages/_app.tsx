import type { AppProps } from "next/app";
import { Metrics } from "@/components/shared/metrics";

import "../styles/globals.css";

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Metrics />
    </>
  );
}
