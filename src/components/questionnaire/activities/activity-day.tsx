import { Description } from "@/components/description";
import { LabeldNumInput } from "@/components/num-input";
import { IActivityTerm } from "health-screening-shared/interfaces";
import React from "react";

interface Props {
  headmark: string;
  text: string;
  value?: IActivityTerm;
  onHoursChange: (value: number | undefined) => void;
  onMinutesChange: (value: number | undefined) => void;
}

export default function ActivityDay({
  headmark,
  text,
  value,
  onHoursChange,
  onMinutesChange,
}: Props) {
  return (
    <div className="flex w-fit flex-col">
      <Description headmark={headmark} text={text} />

      <div className="ml-auto flex">
        <LabeldNumInput
          inputClassName="w-12"
          sLabel="하루에"
          eLabel="시간"
          value={value?.hours}
          min={0}
          max={23}
          onChange={onHoursChange}
        />
        <LabeldNumInput
          className="ml-2"
          inputClassName="w-12"
          eLabel="분"
          value={value?.minutes}
          min={0}
          max={59}
          onChange={onMinutesChange}
        />
      </div>
    </div>
  );
}
