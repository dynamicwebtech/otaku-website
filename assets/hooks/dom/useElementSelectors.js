/**
 *
 *  This is used to add a selector class to each specific element
 *
 */

import { useEffect } from "react";

const useElementSelectors = () => {
  useEffect(() => {
    const ELEMENT_TYPES = [
      "h1",
      "h1 span",
      "h2",
      "h2 span",
      "h3",
      "h3 span",
      "h4",
      "h4 span",
      "h5",
      "h5 span",
      "h6",
      "h6 span",
      "p",
      "p a",
      "span",
      "span span",
      "a",
      "a span",
      "em",
      "li",
      "img",
      "br",
      "strong",
      "button",
      "button span",
      "label",
      "select",
      "input",
      "textarea",
      ':contains("&nbsp;")',
    ];

    setTimeout(() => {
      ELEMENT_TYPES.forEach((eT) => {
        // Getting each element by the tag name
        const ELEMENTS = document.getElementsByTagName(eT);

        // Adding the class "selected" to each element that fits from the array
        for (let i = 0; i < ELEMENTS.length; i++) {
          if (!ELEMENTS[i].classList.contains("selected")) {
            ELEMENTS[i].classList.add("selected");
          }
        }
      });
    }, 200);
  }, []);

  return "";
};

export default useElementSelectors;
