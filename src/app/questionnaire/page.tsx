"use client";
import "kbr-react-shared/styles";
import React, { useState } from "react";
import Histories from "@/components/questionnaire/histories/histories";
import Smokings from "@/components/questionnaire/smokings/smokings";
import Drinks from "@/components/questionnaire/drinks/drinks";
import Activities from "@/components/questionnaire/activities/activities";
import { LottieScrollDown } from "@/components/lottie/lottie-scroll-down";

export default function QuestionairePage() {
  return (
    <main className="w-full select-none">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:px-20">
        <Histories />
        <Smokings />
        <Drinks />
        <Activities />
        <LottieScrollDown className="fixed bottom-1 w-20 left-1/2 -translate-x-1/2" />
      </div>
    </main>
  );
}
