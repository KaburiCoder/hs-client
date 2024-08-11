import { Title } from "@/components/Title";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import React from "react";
import Activities8 from "./activities.8";
import Activities9 from "./activities.9";
import Activities10 from "./activities.10";

export default function Activities() {
  return (
    <section>
      <Title id={questionIds.activity.head}>신체활동(운동)</Title>
      <Activities8 />
      <Activities9 />
      <Activities10 />
    </section>
  );
}
