/**
 *
 *  This is used to reset the users scroll position
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useScrollRestoration = () => {
  useEffect(() => {
    // Setting the scrollRestoration to manual
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Before changing the page, marking the browser to scroll the user back to the top of page
    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    // Once marked, resetting the users position
    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  return "";
};

export default useScrollRestoration;
