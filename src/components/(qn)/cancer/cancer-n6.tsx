import React from "react";
import { DescriptionWrapper } from "@/components/Description";
import { ICancerN6, useCancerStore } from "@/stores/cancer/cancer-store";
import { CancerCheckBoxes } from "./cancer-check-boxes";
import useCheckChange from "./_hooks/use-check-change";
import { QnErrorBox } from "../general/questionnaire-error-box";
import { cancerIds } from "@/lib/objects/cancer-obj";

export default function CancerN6() {
  const n6 = useCancerStore((state) => state.n6);
  const setN6 = useCancerStore((state) => state.setN6);
  const { handleChange, handleHasChange } = useCheckChange(setN6);

  return (
    <QnErrorBox selectedKey="cancer" errorKeys={[cancerIds.n6]}>
      <DescriptionWrapper
        id={cancerIds.n6}
        headmark={"6"}
        text={
          <span>
            현재 또는 과거에 진단받은{" "}
            <span className="font-bold">대장 항문질환</span>이 있으십니까?
          </span>
        }
      >
        <CancerCheckBoxes
          nObj={n6 as any}
          nKeyObj={
            [
              { nKey: "has", text: "없음" },
              { nKey: "daejangyongjong", text: "대장용종" },
              { nKey: "daejangyeom", text: "궤양성 대장염" },
              { nKey: "cron", text: "크론병" },
              { nKey: "chijil", text: "치질" },
              { nKey: "etc", text: "기타" },
            ] satisfies { nKey: keyof ICancerN6; text: string }[]
          }
          onChange={handleChange}
          onHasChange={handleHasChange.bind(null, cancerIds.n7)}
        />
      </DescriptionWrapper>
    </QnErrorBox>
  );
}
