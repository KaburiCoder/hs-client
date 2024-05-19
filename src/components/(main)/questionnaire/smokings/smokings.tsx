import React from "react";
import { Title } from "../../../title";
import Smokings4 from "./smokings.4";
import Smokings5 from "./smokings.5";
import Smokings6 from "./smokings.6";
import { questionIds } from "@/lib/objects/questionnaire-obj";

export default function Smokings() {
  return (
    <section>
      <Title id={questionIds.smoking.head}>{"흡연 및 전자담배"}</Title>
      <Smokings4 />
      <Smokings5 />
      <Smokings6 />
    </section>
  );
}
