/**
 *
 *  This is used to clear the local and session storage
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import DeclareStorageVariable from "../../functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../../functions/data/storage/RemoveStorageVariable";

const useClearSSLS = () => {
  const router = useRouter();

  useEffect(() => {
    // Checking if the EA fix is marked. If not, mark it then page reload
    if (!sessionStorage.getItem("EA Fix")) {
      DeclareStorageVariable("session", "EA Fix", true);
      router.reload();
    }

    // Once the EA fix is marked, clear the local and session storages
    if (sessionStorage.getItem("EA Fix")) {
      const SS_VARIABLES = [
        "Modal Opened",
        "Mobile Nav Opened",
        "Page Reload",
        "Submission Sent",
        "ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog",
      ];
      const LS_VARIABLES = ["ally-supports-cache"];

      SS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("session", variable);
      });
      LS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("local", variable);
      });
    }
  }, [router]);

  return "";
};

export default useClearSSLS;
