/**
 *
 *  This is used for the Page Routing
 *
 */

export default function PageRouting(route, { attemptRouteChange }) {
  if (route === "/") {
    attemptRouteChange("/");
  }

  if (route === "/info") {
    attemptRouteChange("/info");
  }

  if (route === "/contact") {
    attemptRouteChange("/contact");
  }

  if (route === "/store") {
    attemptRouteChange("/store");
  }
}
