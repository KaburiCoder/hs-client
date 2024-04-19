import React, { useEffect, useState } from "react";
import { Description } from "@/components/description";
import SmokingTerm from "./smoking-term";
import { StretchedRadioGroup } from "@/components/radio";
import { ISmokingResult, ISmokingTerm } from "@/stores/interfaces/smoking";
import { BlurWrapper } from "@/components/blur-wrapper";

interface SmokingTermGroupProps {
  blur: boolean;
  description: {
    headmark: string;
    text: string;
  };
  onChange: (result: ISmokingResult) => void;
}

export function SmokingTermGroup({
  blur,
  description,
  onChange,
}: SmokingTermGroupProps) {
  const [smoking, setSmoking] = useState<boolean>();
  const [term, setTerm] = useState<ISmokingTerm>();

  useEffect(() => {
    onChange({ smoking, term });
  }, [smoking, term]);

  return (
    <BlurWrapper blur={blur}>
      <Description headmark={description.headmark} text={description.text} />
      <StretchedRadioGroup
        datas={[
          { text: "현재 피움", value: 1 },
          { text: "과거에는 피웠으나 현재 피우지 않음", value: 0 },
        ]}
        onChange={(v) => setSmoking(!!v)}
      />
      <SmokingTerm quitNow={smoking === false} onChange={setTerm} />
    </BlurWrapper>
  );
}
