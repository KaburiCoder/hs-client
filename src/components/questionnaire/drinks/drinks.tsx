import { Description, QuoteDescription } from "@/components/description";
import { Title } from "@/components/title";
import React, { useState } from "react";
import Drinks7 from "./drinks.7";
import Drinks7d1 from "./drinks.7_1";
import Drinks7d2 from "./drinks.7_2";

export default function Drinks() {
  return (
    <section>
      <Title>음주</Title>
      <QuoteDescription text={"지난 1년 간"} />
      <Drinks7 />
      <Drinks7d1 />
      <Drinks7d2 />
    </section>
  );
}
