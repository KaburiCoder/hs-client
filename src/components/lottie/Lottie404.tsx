"use client";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";
import Lottie from "react-lottie-player";
import error404 from "@/public/lotties/404-animation.json";

export function Lottie404({ className }: ClassNameProps) {
  return <Lottie className={className} animationData={error404} play />;
}
