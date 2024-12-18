import { Fragment } from "react";
import { MicrosoftClarity } from "./microsoft-clarity";
import { GoogleTagManager } from "./google-tag-manager";

export const Metrics = () => (
  <Fragment>
    <MicrosoftClarity />
    <GoogleTagManager />
  </Fragment>
);
