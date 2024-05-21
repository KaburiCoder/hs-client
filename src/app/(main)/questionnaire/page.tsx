"use client";
import React from "react";
import QuestionaireBody from "@/components/(main)/questionnaire/questionnaire-body";
import withSelectPatient from "../../with-select-patient";

const QuestionairePage = () => {
  return <QuestionaireBody />;
};

export default withSelectPatient(QuestionairePage);
