"use client";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";
import Lottie from "react-lottie-player";
import SuccessAni from "@/public/lotties/success-ani.json";

export function LottieSuccess({ className }: ClassNameProps) {
  return (
    <Lottie
      className={className}
      animationData={SuccessAni}
      play
      loop={false}
      // speed={0.5}
    />
  );
}
