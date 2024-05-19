"use client";
import React, { useEffect, useState } from "react";
import Histories from "@/components/(main)/questionnaire/histories/histories";
import Smokings from "@/components/(main)/questionnaire/smokings/smokings";
import Drinks from "@/components/(main)/questionnaire/drinks/drinks";
import Activities from "@/components/(main)/questionnaire/activities/activities";
import Confirms from "@/components/(main)/questionnaire/confirms/confirms";
import ScrollDownAnimation from "@/components/(main)/questionnaire/scroll-down-animation/scroll-down-animation";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { useQuestionStore } from "@/stores/question-store";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import AddExams from "@/components/(main)/questionnaire/add-exams/add-exams";
import { useQnClear } from "./_hooks/use-qn-clear";

export default function QuestionaireBody() {  
  const clearPatient = useSelectionPatientStore((state) => state.clearPatient);
  const clearQuestionnaire = useQuestionStore(
    (state) => state.clearQuestionnaire,
  );
  const { push } = useRouter();
  const patient = useSelectionPatientStore((state) => state.patient);
  useQnClear();

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
        <AddExams />
        <Confirms />
        <ScrollDownAnimation />
      </div>
    </main>
  );
}
