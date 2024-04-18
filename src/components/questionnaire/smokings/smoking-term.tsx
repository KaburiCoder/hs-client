import React from "react";
import { SmokingInput } from "./smoking-input";

interface SmokingTermProps {
  quitNow?: boolean;
}

export default function SmokingTerm({ quitNow }: SmokingTermProps) {
  function handleYearsChange(value: number | undefined): void {
    console.log("년도", value);
  }

  function handleAverageChange(value: number | undefined): void {
    console.log("개비", value);
  }

  function handleQuitYearsChange(value: number | undefined): void {
    console.log("끊년", value);
  }

  return (
    <div className="flex flex-wrap items-center gap-10 border rounded-lg p-2 pr-10 justify-end">
      <SmokingInput
        inputClassName="w-10"
        sLabel="총"
        eLabel="년"
        max={99}
        onChange={handleYearsChange}
      />
      <SmokingInput
        inputClassName="w-14"
        sLabel={"하루평균"}
        eLabel="개비"
        max={999}
        onChange={handleAverageChange}
      />
      {quitNow && (
        <SmokingInput
          inputClassName="w-10"
          sLabel="끊은지"
          eLabel="년"
          max={99}
          onChange={handleQuitYearsChange}
        />
      )}
    </div>
  );
}
