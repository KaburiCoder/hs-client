"use client";
import { BtnCheckBox } from "@/components/btn-checkbox";
import { BtnRadio, RadioGroup } from "@/components/radio";
import { useQuestionStore } from "@/stores/question-store";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [check, setCheck] = useState(false);
  const { history, setHistory } = useQuestionStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BtnCheckBox
        checked={history?.n1?.angina?.diagnosis}
        onCheckChange={(bool) => {
          setHistory({ ...history, n1: { angina: { diagnosis: bool } } });
        }}
      />

      <RadioGroup onChange={console.log} defaultValue={2}>
        <BtnRadio value={1} text="123" />
        <BtnRadio value={2} />
        <BtnRadio value={"aa"} />
      </RadioGroup>
    </main>
  );
}
