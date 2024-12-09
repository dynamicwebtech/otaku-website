/**
 *
 *  This is used to display/hide the loading screen
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NProgress from "nprogress";

const useLoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Beginning to change pages
    const handleRouteChangeStart = () => {
      NProgress.start();
      // Marking the loading screen to popup
      setLoading(true);

      // Disabling scrolling and clicking
      document.body.style.pointerEvents = "none";
      document.body.style.overflowY = "hidden";

      const loadingScreen = document.getElementById("loadingScreen");

      // Displaying the loading screen
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.opacity = 1;
          loadingScreen.style.visibility = "visible";
        }
      }, 100);
    };

    // After the page has changed
    const handleRouteChangeComplete = () => {
      NProgress.done();

      // Hiding the loading screen
      const loadingScreen = document.getElementById("loadingScreen");
      if (loadingScreen) {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.visibility = "hidden";
      }

      // Enabling clicking and scrolling
      document.body.style.pointerEvents = "auto";
      document.body.style.overflowY = "auto";

      // Unmarking the loading screen
      setTimeout(() => setLoading(false), 1900);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  return loading;
};

export default useLoadingScreen;
