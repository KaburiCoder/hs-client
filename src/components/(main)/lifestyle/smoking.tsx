"use client";
import { CustomRadioGroup } from "@/components/custom-radio-group";
import { Description } from "@/components/description";
import { Title } from "@/components/title";
import { useLsSmokingStore } from "@/stores/lifestyle/ls-smoking-store";
import React from "react";
import LsNextButtons from "./ls-next-buttons";

export default function Smoking() {
  const {
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    setN1,
    setN2,
    setN3,
    setN4,
    setN5,
    setN6,
    setN7,
    setN8,
  } = useLsSmokingStore();

  return (
    <section className="flex flex-col gap-4">
      <Title>흡연</Title>
      <Description
        id="smoking_n1"
        headmark={"1"}
        text={"앞으로 1개월 이내에 담배를 끊을 계획이 있으십니까?"}
      />

      <CustomRadioGroup
        value={n1}
        onValueChange={setN1}
        items={{
          "1": "1개월 안에 금연할 계획이 있다.",
          "2": "6개월 안에 금연할 계획이 있다.",
          "3": "6개월 이내는 아니지만 언젠가는 금연할 생각이 있다.",
          "4": "현재로서는 전혀 금연할 생각이 없다.",
        }}
      />

      <Description
        id={"id"}
        headmark={"2"}
        text={"만약 오늘 당장 금연을 하신다면 금연성공을 얼마나 확신하십니까?"}
      />

      <CustomRadioGroup
        row
        value={n2}
        onValueChange={setN2}
        items={{
          "1": "0 (전혀아님)",
          "2": "1",
          "3": "2",
          "4": "3",
          "5": "4",
          "6": "5",
          "7": "6",
          "8": "7 (매우확신)",
        }}
      />

      <Description
        id={"id"}
        headmark={"3"}
        text={"아침에 일어나서 얼마 만에 첫 번째 담배를 피십니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n3}
        onValueChange={setN3}
        items={{
          "1": "5분 이내",
          "2": "6-30분 사이",
          "3": "31-60분 사이",
          "4": "60분 이후",
        }}
      />

      <Description
        id={"id"}
        headmark={"4"}
        text={
          "당신은 금연구역, 예를 들면 교회, 극장, 도서관 등에서 흡연을 참기가 어렵습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n4}
        onValueChange={setN4}
        items={{
          "1": "예",
          "2": "아니오",
        }}
      />

      <Description
        id={"id"}
        headmark={"5"}
        text={"어떤 경우의 담배가 가장 포기하기 싫으시겠습니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n5}
        onValueChange={setN5}
        items={{
          "1": "아침 첫 담배",
          "2": "다른 나머지",
        }}
      />

      <Description
        id={"id"}
        headmark={"6"}
        text={"하루에 담배를 몇 개비나 피우십니까?"}
      />

      <CustomRadioGroup
        row
        minWidth
        value={n6}
        onValueChange={setN6}
        items={{
          "1": "10개비 이하",
          "2": "11-20개비",
          "3": "21-30개비",
          "4": "31개비 이상",
        }}
      />

      <Description
        id={"id"}
        headmark={"7"}
        text={
          "아침에 일어나서 첫 몇시간 동안에, 하루 중 다른 시간보다 더 자주 담배를 피우십니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n7}
        onValueChange={setN7}
        items={{
          "1": "예",
          "2": "아니오",
        }}
      />

      <Description
        id={"id"}
        headmark={"8"}
        text={
          "하루 중 대부분을 누워 지낼 만큼 몹시 아프다면 담배를 피우시겠습니까?"
        }
      />

      <CustomRadioGroup
        row
        minWidth
        value={n8}
        onValueChange={setN8}
        items={{
          "1": "예",
          "2": "아니오",
        }}
      />
    </section>
  );
}
