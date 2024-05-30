"use client";
import { LabeldNumInput } from "@/components/num-input";
import { ISmokingTerm } from "health-screening-shared/interfaces";
import React, { useEffect, useRef, useState } from "react";
import { DisabledProps } from "../../../../lib/props/disabled-props";

interface SmokingTermProps extends DisabledProps {
  value?: ISmokingTerm;
  quitNow?: boolean;
  onChange: (term: keyof ISmokingTerm, value: number | undefined) => void;
}

export const SmokingTerm = ({
  value,
  quitNow,
  isDisabled,
  onChange,
}: SmokingTermProps) => {
  const yearRef = useRef<HTMLInputElement>(null);
  const cigarRef = useRef<HTMLInputElement>(null);
  const quitYearRef = useRef<HTMLInputElement>(null);

  function handleChange(
    term: keyof ISmokingTerm,
    value: number | undefined,
  ): void {
    onChange(term, value);

    const length = value?.toString().length ?? 0;

    if (length >= 2) {
      switch (term) {
        case "totalYears":
          return cigarRef.current?.focus();
        case "cigarettes":
          if (quitNow) {
            return quitYearRef.current?.focus();
          }
          return cigarRef.current?.blur();
        case "quitYears":
          return quitYearRef.current?.blur();
      }
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-10 rounded-lg border p-2 pr-10">
      <LabeldNumInput
        ref={yearRef}
        isDisabled={isDisabled}
        inputClassName="w-12"
        sLabel="총"
        eLabel="년"
        max={99}
        value={value?.totalYears}
        onChange={handleChange.bind(null, "totalYears")}
      />
      <LabeldNumInput
        ref={cigarRef}
        isDisabled={isDisabled}
        inputClassName="w-14"
        sLabel={"하루평균"}
        eLabel="개비"
        max={999}
        value={value?.cigarettes}
        onChange={handleChange.bind(null, "cigarettes")}
      />
      {quitNow && (
        <LabeldNumInput
          ref={quitYearRef}
          isDisabled={isDisabled}
          inputClassName="w-12"
          sLabel="끊은지"
          eLabel="년"
          max={99}
          value={value?.quitYears}
          onChange={handleChange.bind(null, "quitYears")}
        />
      )}
    </div>
  );
};
