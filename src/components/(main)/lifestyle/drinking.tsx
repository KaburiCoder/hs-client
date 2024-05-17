"use client";
import { CustomRadioGroup } from "@/components/custom-radio-group";
import { Description } from "@/components/description";
import { Title } from "@/components/title";
import { useLsDrinkingStore } from "@/stores/lifestyle/ls-drinking-store";
import React from "react";

export default function Drinking() {
  const {
    n1,
    n2_1,
    n2_2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10,
    setN1,
    setN2_1,
    setN2_2,
    setN3,
    setN4,
    setN5,
    setN6,
    setN7,
    setN8,
    setN9,
    setN10,
  } = useLsDrinkingStore();

  return (
    <section className="flex flex-col gap-4">
      <Title>음주</Title>
      <Description
        id={"id"}
        headmark={"1"}
        text={"술을 마시는 횟수는 어느 정도입니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n1}
        onValueChange={setN1}
        items={{
          "1": "한 달에 1번 이하",
          "2": "한 달에 2~4번",
          "3": "일주일에 2~3번",
          "4": "일주일에 4번 이상",
        }}
      />

      <Description
        id={"id"}
        headmark={"2-1"}
        text={"술(소주)을 마시는 날은 보통 몇잔을 마십니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n2_1}
        onValueChange={setN2_1}
        items={{
          "1": "반병 이하",
          "2": "1병 이하",
          "3": "1.5병 정도",
          "4": "2병 정도",
          "5": "2.5병 이상",
        }}
      />

      <Description
        id={"id"}
        headmark={"2-2"}
        text={
          "기타의 술(양주1잔/와인1잔/막걸리 한사발/캔맥주 1캔 /작은 병맥주 1병 1잔으로 생맥주 500은 1.3 잔으로 계산)"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n2_2}
        onValueChange={setN2_2}
        items={{
          "1": "1~2잔",
          "2": "3~4잔",
          "3": "5~6잔",
          "4": "7~9잔",
          "5": "10잔 이상",
        }}
      />

      <Description
        id={"id"}
        headmark={"3"}
        text={
          "한 번의 술좌석에서 소주 1병을 초과 또는 맥주 5캔(생맥주 2000cc이상)이상을 마시는 횟수는? (알코올 60g 해당/양주,와인,막걸리는 각 5잔 이상)"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n3}
        onValueChange={setN3}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"4"}
        text={
          "지난 1년간, 일단 술을 마시기 시작하여 자제가 안 된 적이 있습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n4}
        onValueChange={setN4}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"5"}
        text={"지난 1년간,음주때문에 일상생활에 지장을 받은 적이 있습니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n5}
        onValueChange={setN5}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"6"}
        text={
          "지난 1년간,과음 후 다음날 아침 정신을 차리기 위해 해장술을 마신 적이 있습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n6}
        onValueChange={setN6}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"7"}
        text={"지난 1년간, 음주 후 술을 마신것에 대해 후회한 적이 있습니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n7}
        onValueChange={setN7}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"8"}
        text={
          "지난 1년간, 술이 깬 후에 취중의 일을 기억할 수 없었던 적이 있습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n8}
        onValueChange={setN8}
        items={baseItems}
      />

      <Description
        id={"id"}
        headmark={"9"}
        text={
          "당신의 음주로 인해 본인이 다치거나, 또는 가족이나 타인이 다친 적이 있습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n9}
        onValueChange={setN9}
        items={baseItems2}
      />

      <Description
        id={"id"}
        headmark={"10"}
        text={
          "가족이나 의사가 당신의 음주에 대해 걱정을 하거나, 또는 '술을 끊거나  줄이라'는 권고를 한 적이 있습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n10}
        onValueChange={setN10}
        items={baseItems2}
      />
    </section>
  );
}

const baseItems = {
  "1": "전혀 없다",
  "2": "한 달에 한 번 미만",
  "3": "한 달에 한 번 정도",
  "4": "일주일에 한 번 정도",
  "5": "거의 매일",
};

const baseItems2 = {
  "1": "전혀 없었다",
  "2": "과거에는 있었지만, 지난 1년 동안에는 없었다",
  "3": "지난 1년 동안에 있었다",
};
