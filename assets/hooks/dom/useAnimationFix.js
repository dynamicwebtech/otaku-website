import { useEffect } from "react";
import { useRouter } from "next/router";

const useAnimationFix = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  }, [router]);

  return "";
};

export default useAnimationFix;
