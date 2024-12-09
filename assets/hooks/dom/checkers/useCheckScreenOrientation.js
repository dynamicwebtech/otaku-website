/**
 *
 *  This is used to check the users screen orientation
 *
 */

import { useEffect } from "react";

import CheckScreenOrientation from "../../../functions/dom/checkers/CheckScreenOrientation";

const useCheckScreenOrientation = () => {
  useEffect(() => {
    window.addEventListener("orientationchange", () => {
      CheckScreenOrientation();
    });
  }, []);

  return "";
};

export default useCheckScreenOrientation;
