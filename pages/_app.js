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

// Component Imports
import { LoadingScreen } from "../assets/components/global/LoadingScreen";

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

//TODO: This is used to indicate if the client has not paid for the project and/or the monthly invoice(s)

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [LOADING, SET_LOADING] = useState(false);

  useEffect(() => {
    let LOAD_TIMER;

    router.events.on("routeChangeStart", () => {
      NProgress.start();
      SET_LOADING(true);

      document.body.style.pointerEvents = "none";
      document.body.style.overflowY = "hidden";

      setTimeout(() => {
        const LOADING_SCREEN = document.getElementById("loadingScreen");
        LOADING_SCREEN.style.opacity = 1;
        LOADING_SCREEN.style.visibility = "visible";
      }, 300);
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();

      setTimeout(() => {
        const LOADING_SCREEN = document.getElementById("loadingScreen");
        LOADING_SCREEN.style.opacity = 0;
        LOADING_SCREEN.style.visibility = "hidden";
      }, 1200);

      LOAD_TIMER = setTimeout(() => {
        SET_LOADING(false);
        document.body.style.pointerEvents = "auto";
        document.body.style.overflowY = "auto";
      }, 1900);
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();

      setTimeout(() => {
        const LOADING_SCREEN = document.getElementById("loadingScreen");
        LOADING_SCREEN.style.opacity = 0;
        LOADING_SCREEN.style.visibility = "hidden";
      }, 300);

      LOAD_TIMER = setTimeout(() => {
        SET_LOADING(false);
        document.body.style.pointerEvents = "auto";
        document.body.style.overflowY = "auto";
      }, 1900);
    });
  }, []);

  return (
    <>
      {LOADING && <LoadingScreen />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
