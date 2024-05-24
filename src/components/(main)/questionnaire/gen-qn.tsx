import React from "react";
import Histories from "./histories/histories";
import Smokings from "./smokings/smokings";
import Drinks from "./drinks/drinks";
import Activities from "./activities/activities";
import AddExams from "./add-exams/add-exams";

export default function GenQn() {
  return (
    <section className="flex flex-col gap-4">
      <Histories />
      <Smokings />
      <Drinks />
      <Activities />
      <AddExams />
    </section>
  );
}
