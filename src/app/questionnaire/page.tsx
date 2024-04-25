"use client";
import "kbr-react-shared/styles";
import React, { useState } from "react";
import Histories from "@/components/questionnaire/histories/histories";
import Smokings from "@/components/questionnaire/smokings/smokings";
import Drinks from "@/components/questionnaire/drinks/drinks";
import Activities from "@/components/questionnaire/activities/activities";
import Confirms from "@/components/questionnaire/confirms/confirms";
import ScrollDownAnimation from "@/components/questionnaire/scroll-down-animation/scroll-down-animation";

export default function QuestionairePage() {
  return (
    <main className="w-full select-none">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:px-20">
        <Histories />
        <Smokings />
        <Drinks />
        <Activities />
        <Confirms />
        <ScrollDownAnimation />
      </div>
    </main>
  );
}
