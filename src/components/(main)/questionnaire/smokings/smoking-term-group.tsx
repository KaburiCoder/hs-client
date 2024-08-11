import React, { useEffect, useState } from "react";
import { Description } from "@/components/Description-";
import { SmokingTerm } from "./smoking-term";
import {
  ISmokingResult,
  ISmokingTerm,
} from "health-screening-shared/interfaces";
import { BlurWrapper } from "@/components/BlurWrapper";
import { StretchedRadioGroup } from "@/components/radio/StrectchedRadioGroup";
import { convertBoolToInt } from "@/lib/utils/convert.util";

interface SmokingTermGroupProps {
  blur: boolean;
  description: {
    headmark: string;
    text: string;
  };
  value?: {
    yn?: boolean;
    term?: ISmokingTerm;
  };
  id?: string;
  onTermYnChange: (yn: boolean) => void;
  onTermChange: (term: keyof ISmokingTerm, value: number | undefined) => void;
}

export function SmokingTermGroup({
  blur,
  description,
  value,
  id,
  onTermYnChange,
  onTermChange,
}: SmokingTermGroupProps) {
  return (
    <BlurWrapper blur={blur}>
      <Description
        id={id}
        headmark={description.headmark}
        text={description.text}
      />
      <StretchedRadioGroup
        value={convertBoolToInt(value?.yn)}
        datas={[
          { text: "현재 피움", value: 1 },
          { text: "과거에는 피웠으나 현재 피우지 않음", value: 0 },
        ]}
        onChange={(v) => onTermYnChange(!!v)}
      />
      <SmokingTerm
        value={value?.term}
        quitNow={value?.yn === false}
        onChange={onTermChange}
      />
    </BlurWrapper>
  );
}
