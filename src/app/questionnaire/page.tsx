"use client";
import "kbr-react-shared/styles";
import React, { useState } from "react";
import Histories from "@/components/questionnaire/histories/histories";
import Smokings from "@/components/questionnaire/smokings/smokings";
import Drinks from "@/components/questionnaire/drinks/drinks";

import { BtnRadio, RadioGroup } from "@/components/radio";

export default function QuestionairePage() {
  return (
    <main className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col gap-8">
        <Histories />
        <Smokings />
        <Drinks />
      </div>
    </main>
  );
}
