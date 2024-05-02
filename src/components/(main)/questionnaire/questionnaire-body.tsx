"use client";
import React, { useEffect, useState } from "react";
import Histories from "@/components/questionnaire/histories/histories";
import Smokings from "@/components/questionnaire/smokings/smokings";
import Drinks from "@/components/questionnaire/drinks/drinks";
import Activities from "@/components/questionnaire/activities/activities";
import Confirms from "@/components/questionnaire/confirms/confirms";
import ScrollDownAnimation from "@/components/questionnaire/scroll-down-animation/scroll-down-animation";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { useQuestionStore } from "@/stores/question-store";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

export default function QuestionaireBody() {
  const clearPatient = useSelectionPatientStore((state) => state.clearPatient);
  const clearQuestionnaire = useQuestionStore(
    (state) => state.clearQuestionnaire,
  );
  const { push } = useRouter();
  const patient = useSelectionPatientStore((state) => state.patient);

  useEffect(() => {
    if (!patient) push(paths.root);
  }, [patient]);

  useEffect(() => {
    return () => {
      clearQuestionnaire();
      clearPatient();
    };
  }, []);
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
