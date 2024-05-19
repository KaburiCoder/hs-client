"use client";
import { LabeldNumInput } from "@/components/num-input";
import { ISmokingTerm } from "health-screening-shared/interfaces";
import React, { useEffect, useRef, useState } from "react";

interface SmokingTermProps {
  value?: ISmokingTerm;
  quitNow?: boolean;
  onChange: (term: keyof ISmokingTerm, value: number | undefined) => void;
}

export const SmokingTerm = ({ value, quitNow, onChange }: SmokingTermProps) => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-10 rounded-lg border p-2 pr-10">
      <LabeldNumInput
        inputClassName="w-12"
        sLabel="총"
        eLabel="년"
        max={99}
        value={value?.totalYears}
        onChange={onChange.bind(null, "totalYears")}
      />
      <LabeldNumInput
        inputClassName="w-14"
        sLabel={"하루평균"}
        eLabel="개비"
        max={999}
        value={value?.cigarettes}
        onChange={onChange.bind(null, "cigarettes")}
      />
      {quitNow && (
        <LabeldNumInput
          inputClassName="w-12"
          sLabel="끊은지"
          eLabel="년"
          max={99}
          value={value?.quitYears}
          onChange={onChange.bind(null, "quitYears")}
        />
      )}
    </div>
  );
};
