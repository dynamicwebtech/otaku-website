// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page" id="PAGE">
      <div className="page-inner" id="PAGE_INNER">
        <span
          onClick={(e) => {
            router.push("/info");
          }}
        >
          Info
        </span>
        <br />
        <span
          onClick={(e) => {
            router.push("/contact");
          }}
        >
          Contact
        </span>
        <br />
        <span
          onClick={(e) => {
            router.push("/store");
          }}
        >
          Store
        </span>
      </div>
    </div>
  );
}
