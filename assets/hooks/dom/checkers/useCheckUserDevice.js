/**
 *
 *  This is used to check to see if the user is on mobile or desktop
 *
 */

import { useEffect } from "react";

import CheckUserDevice from "../../../functions/dom/checkers/CheckUserDevice";

const useCheckUserDevice = () => {
  useEffect(() => {
    let mobile,
      desktop = false;

    // Checking the users device and marking it
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    // Once the page is fully loaded, check the user device again
    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Checking the user device if they change their orientation
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  return "";
};

export default useCheckUserDevice;
