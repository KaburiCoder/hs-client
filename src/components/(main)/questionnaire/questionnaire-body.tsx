"use client";
import React from "react";
import Histories from "@/components/(main)/questionnaire/histories/histories";
import Smokings from "@/components/(main)/questionnaire/smokings/smokings";
import Drinks from "@/components/(main)/questionnaire/drinks/drinks";
import Activities from "@/components/(main)/questionnaire/activities/activities";
import Confirms from "@/components/(main)/questionnaire/confirms/confirms";
import ScrollDownAnimation from "@/components/(main)/questionnaire/scroll-down-animation/scroll-down-animation";
import AddExams from "@/components/(main)/questionnaire/add-exams/add-exams";
import { useQnClear } from "./_hooks/use-qn-clear";

const QuestionaireBody = () => {
  useQnClear();

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:px-20">
      <Histories />
      <Smokings />
      <Drinks />
      <Activities />
      <AddExams />
      <Confirms />
      <ScrollDownAnimation />
    </div>
  );
};

export default QuestionaireBody;
