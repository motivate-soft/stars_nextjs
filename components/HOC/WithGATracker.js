import React, { useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga";
import { GA_ID } from "../../env-config";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";

const analytics = Analytics({
  app: "Stars of Boston",
  plugins: [
    googleTagManager({
      containerId: GA_ID,
    }),
  ],
});

const WithGATracker = (WrappedComponent) => (props) => {
  useEffect(() => {
    analytics.page();
  }, [Router.events]);

  return <WrappedComponent {...props} />;
};

export default WithGATracker;
