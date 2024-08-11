import React from "react";
import { Title } from "../../../Title-";
import { Histories1 } from "./histories.1";
import Histories2 from "./histories.2";
import Histories3 from "./histories.3";

export default function Histories() {
  return (
    <section>
      <Title>질환력(과거력, 가족력)</Title>
      <Histories1 />
      <Histories2 />
      <Histories3 />
    </section>
  );
}
