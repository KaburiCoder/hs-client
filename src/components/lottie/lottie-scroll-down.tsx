"use client";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";
import Lottie from "react-lottie-player";
import ScrollDownAni from "@/public/lotties/scroll-down-ani.json";

export function LottieScrollDown({ className }: ClassNameProps) {
  return (
    <Lottie
      className={className}
      animationData={ScrollDownAni}
      play
      // speed={0.5}
    />
  );
}
