"use client";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function withSelectPatient(Component: any) {
  return function WithSelectPatient(props: any) {
    const { patient } = useSelectionPatientStore();

    useLayoutEffect(() => {
      if (!patient) redirect("/");
    }, [patient]);

    if (!patient) return null;

    return <Component {...props} patient={patient} />;
  };
}
