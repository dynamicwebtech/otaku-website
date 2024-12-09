import { useRouter } from "next/router";

// This hook will control the navigation and loading state
export function useMarkingRoute(setLoading) {
  const router = useRouter();

  const attemptRouteChange = (url) => {
    setLoading(true); // Set loading to true when attempting to navigate
    const shouldProceed = detectStorageVariable();

    if (!shouldProceed) {
      console.log(
        "Navigation canceled by logic. Will navigate after 2 seconds."
      );

      // Block navigation initially, but set a timeout to override after 2 seconds
      setTimeout(() => {
        console.log("Navigating after 2-second delay...");
        router.push(url).catch(() => {
          console.log("Navigation was blocked.");
        });
      }, 2000); // Delay of 2 seconds
    } else {
      // If the condition passes, navigate immediately
      router.push(url).catch(() => {
        console.log("Navigation was blocked.");
      });
    }
  };

  const detectStorageVariable = () => {
    return false; // Change to true if navigation should proceed
  };

  return { attemptRouteChange };
}
