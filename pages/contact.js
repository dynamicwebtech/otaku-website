// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import PageRouting from "../assets/functions/routing/PageRouting";

// Component Imports

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact({ attemptRouteChange }) {
  const router = useRouter();

  return (
    <div className="page" id="PAGE">
      <div className="page-inner" id="PAGE_INNER">
        <span
          onClick={() => {
            PageRouting("/", { attemptRouteChange });
          }}
        >
          Home
        </span>
        <br />
        <span
          onClick={() => {
            PageRouting("/info", { attemptRouteChange });
          }}
        >
          Info
        </span>
        <br />
        <span
          onClick={() => {
            PageRouting("/contact", { attemptRouteChange });
          }}
        >
          Contact
        </span>
        <br />
        <span
          onClick={() => {
            PageRouting("/store", { attemptRouteChange });
          }}
        >
          Store
        </span>
      </div>
    </div>
  );
}
