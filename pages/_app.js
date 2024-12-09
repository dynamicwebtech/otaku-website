// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports

import useLoadingScreen from "../assets/hooks/dom/useLoadingScreen";
import useScrollRestoration from "../assets/hooks/dom/useScrollRestoration";
import useAnimationFix from "../assets/hooks/dom/useAnimationFix";
import useClearSSLS from "../assets/hooks/data/useClearSSLS";
import useCheckUserDevice from "../assets/hooks/dom/checkers/useCheckUserDevice";
import useCheckScreenOrientation from "../assets/hooks/dom/checkers/useCheckScreenOrientation";
import useElementSelectors from "../assets/hooks/dom/useElementSelectors";
import { useMarkingRoute } from "../assets/hooks/routing/useMarkingRoute";

// Component Imports
import { LoadingScreen } from "../assets/components/global/LoadingScreen";

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

//TODO: This is used to indicate if the client has not paid for the project and/or the monthly invoice(s)

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false); // Manages loading state
  const { attemptRouteChange } = useMarkingRoute(setLoading); // Passing setLoading to the hook
  const router = useRouter();

  // Custom hooks
  useScrollRestoration();
  useClearSSLS();
  useCheckScreenOrientation();
  useCheckUserDevice();
  useElementSelectors();

  // Show loading screen when route change starts
  useEffect(() => {
    const handleRouteChangeStart = () => {
      console.log("Route change started, showing loading screen.");
      setLoading(true); // Show loading screen
    };

    const handleRouteChangeComplete = () => {
      console.log("Route change complete, hiding loading screen.");
      setLoading(false); // Hide loading screen
    };

    // Listen for route change events
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete); // In case of error

    return () => {
      // Cleanup event listeners
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  // Debugging: Log the loading state to verify if it's being set
  console.log("Loading state in MyApp:", loading);

  return (
    <>
      {loading && <LoadingScreen />}{" "}
      {/* Show loading screen when loading is true */}
      <Component
        {...pageProps}
        attemptRouteChange={attemptRouteChange} // Pass attemptRouteChange to the page component
      />
    </>
  );
}

export default MyApp;
