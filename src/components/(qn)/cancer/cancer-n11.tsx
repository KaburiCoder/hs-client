import { CustomRadioGroup } from "@/components/CustomRadioGroup";
import { DescriptionWrapper } from "@/components/Description";
import { useCancerStore } from "@/stores/cancer/cancer-store";
import React from "react";
import { useCancerState } from "./_hooks/use-cancer-state";
import { QnErrorBox } from "../general/questionnaire-error-box";
import { cancerIds } from "@/lib/objects/cancer-obj";
import { useFocus } from "@/lib/hooks/use-focus";

export const CancerN11 = () => {
  const n11 = useCancerStore((state) => state.n11);
  const setN11 = useCancerStore((state) => state.setN11);
  const { hadMenarche, wasMenopause } = useCancerState();
  const { scrollToFocus } = useFocus();

  function handleChange(value: string): void {
    setN11(value);
    scrollToFocus(cancerIds.n12);
  }

  return (
    <QnErrorBox selectedKey="cancer" errorKeys={[cancerIds.n11]}>
      <DescriptionWrapper
        id={cancerIds.n11}
        headmark="11"
        text="폐경 후 증상을 완화하기 위해서 호르몬 제제를 복용하고 계시거나 과거에 복용하신적이 있습니까?"
      >
        <CustomRadioGroup
          isDisabled={!(hadMenarche && wasMenopause)}
          radioClassName="flex-1 xs:flex-none"
          row
          value={n11}
          onValueChange={handleChange}
          items={[
            ["1", "호르몬 제제를 복용한 적 없음"],
            ["2", "2년미만 복용"],
            ["3", "2년이상~5년미만 복용"],
            ["4", "5년이상 복용"],
            ["5", "모르겠음"],
          ]}
        />
      </DescriptionWrapper>
    </QnErrorBox>
  );
};
