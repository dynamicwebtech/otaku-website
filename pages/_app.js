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

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

//TODO: This is used to indicate if the client has not paid for the project and/or the monthly invoice(s)
let IS_PAYMENT_REQUIRED = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //! SENDS USER TO PAYMENT LOCKED SCREEN
  // useEffect(() => {
  //   const handleRedirect = async () => {
  //     if (IS_PAYMENT_REQUIRED && !redirected) {
  //       // Set redirected to true to prevent further redirects
  //       setRedirected(true);

  //       // Redirect to the payment_required page without adding a new entry to the history stack
  //       await router.push("/payment_required", undefined, {
  //         shallow: true,
  //         replace: true,
  //       });
  //     }
  //   };

  //   handleRedirect();
  // }, [IS_PAYMENT_REQUIRED, redirected, router]);

  //? GLOBALS
  //! NProgress Init
  useEffect(() => {
    // NProgress.done(); // Prevents NProgress from being stuck after page route completed
    // if (!IS_PAYMENT_REQUIRED) {
    //   router.events.on("routeChangeStart", () => {
    //     NProgress.start();
    //   });
    //   router.events.on("routeChangeComplete", () => {
    //     NProgress.done();
    //   });
    // }

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
