"use client";
import { LabeldNumInput } from "@/components/num-input";
import { ISmokingTerm } from "health-screening-shared/interfaces";
import React, { useEffect, useRef, useState } from "react";

interface SmokingTermProps {
  value?: ISmokingTerm;
  quitNow?: boolean;
  onChange: (term: ISmokingTerm) => void;
}

export const SmokingTerm = ({ value, quitNow, onChange }: SmokingTermProps) => {
  const [totalYears, setTotalYears] = useState<number>();
  const [cigarettes, setCigarettes] = useState<number>();
  const [quitYears, setQuitYears] = useState<number>();

  const firRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);
  const thrRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChange({ totalYears, cigarettes, quitYears });
  }, [totalYears, cigarettes, quitYears]);

  useEffect(() => {
    setTotalYears(value?.totalYears);
    setCigarettes(value?.cigarettes);
    setQuitYears(value?.quitYears);
  }, [value]);

  useEffect(() => {
    if (!quitNow) {
      setQuitYears(undefined);
    }
  }, [quitNow]);

  return (
    <div className="flex flex-wrap items-center justify-end gap-10 rounded-lg border p-2 pr-10">
      <LabeldNumInput
        ref={firRef}
        inputClassName="w-12"
        sLabel="총"
        eLabel="년"
        max={99}
        value={totalYears}
        onChange={setTotalYears}
      />
      <LabeldNumInput
        ref={secRef}
        inputClassName="w-14"
        sLabel={"하루평균"}
        eLabel="개비"
        max={999}
        value={cigarettes}
        onChange={setCigarettes}
      />
      {quitNow && (
        <LabeldNumInput
          ref={thrRef}
          inputClassName="w-12"
          sLabel="끊은지"
          eLabel="년"
          max={99}
          value={quitYears}
          onChange={setQuitYears}
        />
      )}
    </div>
  );
};
