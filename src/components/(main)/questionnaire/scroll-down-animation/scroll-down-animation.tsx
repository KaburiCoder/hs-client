import { LottieScrollDown } from "@/components/lottie/LottieScrollDown";
import { useWindowScroll } from "@/providers/window-scroll.context";
import React from "react";

export default function ScrollDownAnimation() {
  const { isBottom } = useWindowScroll();
  return (
    <>
      {!isBottom && (
        <LottieScrollDown className="pointer-events-none fixed bottom-1 left-1/2 w-16 -translate-x-1/2" />
      )}
    </>
  );
}
