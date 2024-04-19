import {
  Description,
  QuoteDescription,
  SparkleDescription,
} from "@/components/description";
import { LabeldNumInput } from "@/components/num-input";
import { Title } from "@/components/title";
import { Badge } from "@nextui-org/react";
import React from "react";

export default function Activities() {
  return (
    <section>
      <Title>신체활동(운동)</Title>
      <QuoteDescription
        className="whitespace-pre-line"
        text={`고강도 신체활동의 예
        ☞ 달리기, 에어로빅, 빠른 속도로 자전거 타기, 건설 현장 노동, 계단으로 물건 나르기 등`}
      />

      <div className="flex w-fit flex-col">
        <Description
          headmark="8-1"
          text={
            "평소 1주일간, 숨이 많이 차게 만드는 고강도 신체활동을 며칠 하십니까?"
          }
        />

        <LabeldNumInput
          className="ml-auto"
          inputClassName="w-12"
          sLabel="주당"
          eLabel="일"
          max={7}
          onChange={() => {}}
        />
      </div>

      <div className="flex w-fit flex-col">
        <Description
          headmark="8-2"
          text={
            "평소 하루에 숨이 많이 차게 만드는 고강도 신체활동을 몇 시간 하십니까?"
          }
        />

        <div className="ml-auto flex">
          <LabeldNumInput
            inputClassName="w-12"
            sLabel="하루에"
            eLabel="시간"
            max={23}
            onChange={() => {}}
          />
          <LabeldNumInput
            className="ml-2"
            inputClassName="w-12"
            eLabel="분"
            max={59}
            onChange={() => {}}
          />
        </div>
      </div>

      <QuoteDescription
        className="whitespace-pre-line"
        text={`중강도 신체활동의 예
        ☞ 빠르게 걷기, 복식 테니스, 보통 속도로 자전거 타기, 가벼운 물건 나르기, 청소 등`}
      />
      <SparkleDescription
        className="mt-0"
        text="8번 응답에 관련된 신체활동은 제외하고 답해주십시오."
      />
      <div className="flex w-fit flex-col">
        <Description
          headmark="9-1"
          text={
            "평소 1주일간, 숨이 약간 차게 만드는 중강도 신체활동을 며칠 하십니까?"
          }
        />

        <div className="ml-auto flex">
          <LabeldNumInput
            inputClassName="w-12"
            sLabel="주당"
            eLabel="일"
            max={7}
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="flex w-fit flex-col">
        <Description
          headmark="9-2"
          text={
            "평소 하루에 숨이 약간 차게 만드는 중강도 신체활동을 몇 시간 하십니까?"
          }
        />

        <div className="ml-auto flex">
          <LabeldNumInput
            inputClassName="w-12"
            sLabel="하루에"
            eLabel="시간"
            max={23}
            onChange={() => {}}
          />
          <LabeldNumInput
            className="ml-2"
            inputClassName="w-12"
            eLabel="분"
            max={59}
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="flex w-fit flex-col">
        <Description
          headmark="10"
          text={
            "최근 1주일 동안 팔굽혀펴기, 윗몸일으키기, 아령, 역기, 철봉 등 근력 운동을 한 날은 며칠입니까?"
          }
        />

        <div className="ml-auto flex">
          <LabeldNumInput
            inputClassName="w-12"
            sLabel="주당"
            eLabel="일"
            max={7}
            onChange={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
