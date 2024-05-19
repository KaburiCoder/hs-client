import { Description } from "@/components/description";
import { LabeldNumInput } from "@/components/num-input";
import { InputValueType } from "kbr-nextjs-shared/types";
import React from "react";

interface Props {
  headmark: string;
  text: string;
  id?: string;
  value?: number;
  onChange: (value: number | undefined) => void;
}

export default function ActivityWeek({
  value,
  headmark,
  text,
  id,
  onChange,
}: Props) {
  return (
    <div className="flex w-fit flex-col">
      <Description headmark={headmark} text={text} />

      <LabeldNumInput
        id={id}
        value={value}
        className="ml-auto"
        inputClassName="w-12"
        sLabel="주당"
        eLabel="일"
        min={0}
        max={7}
        onChange={onChange}
      />
    </div>
  );
}
