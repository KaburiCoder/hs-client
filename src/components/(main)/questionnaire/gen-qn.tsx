import React from "react";
import Histories from "./histories/histories";
import Smokings from "./smokings/smokings";
import Drinks from "./drinks/drinks";
import Activities from "./activities/activities";
import AddExams from "./add-exams/add-exams";
import Confirms from "./confirms/confirms";
import ScrollDownAnimation from "./scroll-down-animation/scroll-down-animation";

export default function GenQn() {
  return (
    <section className="flex flex-col gap-4">
      <Histories />
      <Smokings />
      <Drinks />
      <Activities />
      <AddExams />
      <Confirms />
      <ScrollDownAnimation />
    </section>
  );
}
