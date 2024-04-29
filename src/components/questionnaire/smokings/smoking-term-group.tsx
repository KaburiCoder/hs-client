import React, { useEffect, useState } from "react";
import { Description } from "@/components/description";
import { SmokingTerm } from "./smoking-term";
import {
  ISmokingResult,
  ISmokingTerm,
} from "health-screening-shared/interfaces";
import { BlurWrapper } from "@/components/blur-wrapper";
import { StretchedRadioGroup } from "@/components/radio/strectched-radio-group";
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
  onChange: (result: ISmokingResult) => void;
}

export function SmokingTermGroup({
  blur,
  description,
  value,
  onChange,
}: SmokingTermGroupProps) {
  const [smoking, setSmoking] = useState<boolean>();
  const [term, setTerm] = useState<ISmokingTerm>();

  useEffect(() => {
    onChange({ smoking, term });
  }, [smoking, term]);

  useEffect(() => {
    setSmoking(value?.yn);
  }, [value?.yn]);

  useEffect(() => {
    setTerm(value?.term);
  }, [value?.term]);

  return (
    <BlurWrapper blur={blur}>
      <Description headmark={description.headmark} text={description.text} />
      <StretchedRadioGroup
        value={convertBoolToInt(smoking)}
        datas={[
          { text: "현재 피움", value: 1 },
          { text: "과거에는 피웠으나 현재 피우지 않음", value: 0 },
        ]}
        onChange={(v) => setSmoking(!!v)}
      />
      <SmokingTerm
        value={value?.term}
        quitNow={smoking === false}
        onChange={setTerm}
      />
    </BlurWrapper>
  );
}
