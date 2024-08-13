import { QuoteDescription } from "@/components/Description";
import { Title } from "@/components/Title";
import React from "react";
import Drinks7 from "./drinks.7";
import Drinks7d1 from "./drinks.7_1";
import Drinks7d2 from "./drinks.7_2";
import { questionIds } from "@/lib/objects/questionnaire-obj";

export default function Drinks() {
  return (
    <section>
      <Title id={questionIds.drink.head}>음주</Title>
      <QuoteDescription text={"지난 1년 간"} />
      <Drinks7 />
      <Drinks7d1 />
      <Drinks7d2 />
    </section>
  );
}
