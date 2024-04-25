import { useTestStore } from "@/stores/test-store";
import React from "react";

export default function NewUserControl() {
  return <New2 />;
}

function New2() {
  return <New3 />;
}

function New3() {
  const { name } = useTestStore();
  return <div>{name}</div>;
}
