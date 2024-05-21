"use client";
import withSelectPatient from "@/app/with-select-patient";
import LifestyleBody from "@/components/(main)/lifestyle/lifestyle-body";
import React from "react";

const LifestylePage = () => {
  return <LifestyleBody />;
};

export default withSelectPatient(LifestylePage);
