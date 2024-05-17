"use client";
import { BlurWrapper } from "@/components/blur-wrapper";
import { CustomRadioGroup } from "@/components/custom-radio-group";
import { DescriptionWrapper } from "@/components/description";
import { LabeldNumInput } from "@/components/num-input";
import { Title } from "@/components/title";
import { useLsExerciseStore } from "@/stores/lifestyle/ls-exercise-store";
import React from "react";

export default function Exercise() {
  const {
    n1_1,
    n1_2,
    n1_3h,
    n1_3m,
    n1_4,
    n1_5,
    n1_6h,
    n1_6m,
    n2_1,
    n2_2,
    n2_3h,
    n2_3m,
    n3_1,
    n3_2,
    n3_3h,
    n3_3m,
    n3_4,
    n3_5,
    n3_6h,
    n3_6m,
    n4_1h,
    n4_1m,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10,
    n11,
    n12,
    setN1_1,
    setN1_2,
    setN1_3h,
    setN1_3m,
    setN1_4,
    setN1_5,
    setN1_6h,
    setN1_6m,
    setN2_1,
    setN2_2,
    setN2_3h,
    setN2_3m,
    setN3_1,
    setN3_2,
    setN3_3h,
    setN3_3m,
    setN3_4,
    setN3_5,
    setN3_6h,
    setN3_6m,
    setN4_1h,
    setN4_1m,
    setN5,
    setN6,
    setN7,
    setN8,
    setN9,
    setN10,
    setN11,
    setN12,
  } = useLsExerciseStore();

  return (
    <section className="flex flex-col gap-4">
      <Title>운동</Title>
      {/* 1-1 ~ 1-3 */}
      <QuestionGroup
        wrapper1={{
          id: "id",
          headmark: "1-1",
          text: "본인의 일은 최소 10분 이상 계속 숨이 많이 차거나 심장이 매우 빠르게 뛰는 고강도 신체 활동을 포함하고 있습니까?",
          value: n1_1,
          onValueChange: setN1_1,
        }}
        wrapper2={{
          id: "id",
          headmark: "1-2",
          text: "평소 일주일 동안,일과 관련된 고강도 신체 활동을 며칠을 하십니까?",
          day: n1_2,
          onDayChange: setN1_2,
        }}
        wrapper3={{
          id: "id",
          headmark: "1-3",
          text: "평소 하루에 일과 관련된 고강도 신체 활동을 몇 시간 하십니까?",
          hour: n1_3h,
          minute: n1_3m,
          onHourChange: setN1_3h,
          onMinuteChange: setN1_3m,
        }}
      />

      {/* 1-4 ~ 1-6 */}
      <QuestionGroup
        wrapper1={{
          id: "id",
          headmark: "1-4",
          text: "본인의 일은 최소 10분 이상 계속 숨이 약간 차거나 심장이 약간 빠르게 뛰는 중강도 신체 활동을 포함하고 있습니까?",
          value: n1_4,
          onValueChange: setN1_4,
        }}
        wrapper2={{
          id: "id",
          headmark: "1-5",
          text: "평소 일주일 동안,일과 관련된 중강도 신체 활동을 며칠을 하십니까?",
          day: n1_5,
          onDayChange: setN1_5,
        }}
        wrapper3={{
          id: "id",
          headmark: "1-6",
          text: "평소 하루에 일과 관련된 중강도 신체 활동을 몇 시간 하십니까?",
          hour: n1_6h,
          minute: n1_6m,
          onHourChange: setN1_6h,
          onMinuteChange: setN1_6m,
        }}
      />

      {/* 2-1 ~ 2-3 */}
      <QuestionGroup
        wrapper1={{
          id: "id",
          headmark: "2-1",
          text: "평소 장소를 이동할 때 10분 이상 계속 걷거나 자전거 이용 하십니까?",
          value: n2_1,
          onValueChange: setN2_1,
        }}
        wrapper2={{
          id: "id",
          headmark: "2-2",
          text: "평소 일주일 동안,장소를 이동할 때 최소 10분 이상 계속 걷거나 자전거 이용을 며칠 하십니까?",
          day: n2_2,
          onDayChange: setN2_2,
        }}
        wrapper3={{
          id: "id",
          headmark: "2-3",
          text: "평소 하루에 장소를 이동할 때 걷거나 자전거 이용을 몇 시간 하십니까?",
          hour: n2_3h,
          minute: n2_3m,
          onHourChange: setN2_3h,
          onMinuteChange: setN2_3m,
        }}
      />

      {/* 3-1 ~ 3-3 */}
      <QuestionGroup
        wrapper1={{
          id: "id",
          headmark: "3-1",
          text: "평소 최소 10분 이상 계속 숨이 많이 차거나 심장이 매우 빠르게 뛰는 고강도의 스포츠,운동 및 여가 활동을 하십니까?",
          value: n3_1,
          onValueChange: setN3_1,
        }}
        wrapper2={{
          id: "id",
          headmark: "3-2",
          text: "평소 일주일 동안 고강도의 스포츠,운동 및 여가 활동을 며칠 하십니까?",
          day: n3_2,
          onDayChange: setN3_2,
        }}
        wrapper3={{
          id: "id",
          headmark: "3-3",
          text: "평소 하루에 고강도의 스포츠,운동 및 여가 활동을 몇 시간 하십니까?",
          hour: n3_3h,
          minute: n3_3m,
          onHourChange: setN3_3h,
          onMinuteChange: setN3_3m,
        }}
      />

      {/* 3-4 ~ 3-6 */}
      <QuestionGroup
        wrapper1={{
          id: "id",
          headmark: "3-4",
          text: "평소 최소 10분 이상 계속 숨이 약간 차거나 심장이 약간 빠르게 뛰는 중강도의 스포츠,운동 및 여가 활동을 하십니까?",
          value: n3_4,
          onValueChange: setN3_4,
        }}
        wrapper2={{
          id: "id",
          headmark: "3-5",
          text: "평소 일주일 동안,중강도의 스포츠,운동 및 여가 활동을 며칠 하십니까??",
          day: n3_5,
          onDayChange: setN3_5,
        }}
        wrapper3={{
          id: "id",
          headmark: "3-6",
          text: "평소 하루에 중강도의 스포츠,운동 및 여가 활동을 몇 시간 하십니까?",
          hour: n3_6h,
          minute: n3_6m,
          onHourChange: setN3_6h,
          onMinuteChange: setN3_6m,
        }}
      />

      {/* 4-1 */}
      <DescriptionWrapper
        id={"wrapper2.id"}
        headmark={"4-1"}
        text={"평소 하루에 앉아 있거나,누워 있는 시간이 몇 시간 입니까?"}
        wrapperClassName="flex-row items-center justfy-between overflow-hidden max-w-[50rem] mb-4"
        className="my-0"
      >
        <TimeControl
          hour={n4_1h}
          minute={n4_1m}
          onHourChange={setN4_1h}
          onMinuteChange={setN4_1m}
        />
      </DescriptionWrapper>

      {/* 5 */}
      <DescriptionWrapper
        id=""
        headmark="5"
        text="최근 1주일 동안 팔굽혀펴기,윗몸일으키기,아령,역기,철봉 등의 근력 운동을 한날은 며칠입니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n5}
          onValueChange={setN5}
          items={{
            "1": "전혀 하지 않음",
            "2": "1일",
            "3": "2일",
            "4": "3일",
            "5": "4일",
            "6": "5일 이상",
          }}
        />
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="6"
        text="심장에 문제가 있어서 운동을 할 경우 의사의 권고에 의해서만 하라고 들은 적이 있습니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n6}
          onValueChange={setN6}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="7"
        text="운동을 할 때 가슴에 통증을 느낀 적이 있습니까?"
      >
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
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="8"
        text="지난달에 운동을 하지 않고 있는 동안에도 가슴에 통증을 느낀 적이 있습니까?"
      >
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
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="9"
        text="어지러움증이나 의식소실로 인해 균형을 잃은 적이 있습니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n9}
          onValueChange={setN9}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="10"
        text="운동을 바꾼 후에 뼈나 관절에 문제가 생긴적이 있습니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n10}
          onValueChange={setN10}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="11"
        text="현재 혈압이나 심장문제로 의사로부터 처방을 받고 있습니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n11}
          onValueChange={setN11}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>

      <DescriptionWrapper
        id=""
        headmark="12"
        text="운동을 하면 안 되는 다른 이유가 있습니까?"
      >
        <CustomRadioGroup
          row
          minWidth
          value={n12}
          onValueChange={setN12}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>
    </section>
  );
}

interface TimeControlProps {
  hour: number | undefined;
  minute: number | undefined;
  onHourChange: (h: number | undefined) => void;
  onMinuteChange: (m: number | undefined) => void;
}

function TimeControl({
  hour,
  minute,
  onHourChange,
  onMinuteChange,
}: TimeControlProps) {
  return (
    <div className="ml-auto flex py-1">
      <LabeldNumInput
        inputClassName="w-12"
        eLabel="시간"
        value={hour}
        min={0}
        max={23}
        onChange={onHourChange}
      />
      <LabeldNumInput
        className="ml-2"
        inputClassName="w-12"
        eLabel="분"
        value={minute}
        min={0}
        max={59}
        onChange={onMinuteChange}
      />
    </div>
  );
}

interface DayControlProps {
  day: number | undefined;
  onChange: (day: number | undefined) => void;
}
function DayControl({ day, onChange }: DayControlProps) {
  return (
    <div className="ml-auto flex py-1">
      <LabeldNumInput
        className="ml-2"
        inputClassName="w-12"
        eLabel="일"
        value={day}
        min={0}
        max={7}
        onChange={onChange}
      />
    </div>
  );
}

interface Wrapper {
  id: string;
  headmark: string;
  text: string;
}

interface QuestionGroupProps {
  wrapper1: Wrapper & {
    value: string | undefined;
    onValueChange: (value: string) => void;
  };
  wrapper2: Wrapper & {
    day: number | undefined;
    onDayChange: (day: number | undefined) => void;
  };
  wrapper3: Wrapper & {
    hour: number | undefined;
    minute: number | undefined;
    onHourChange: (h: number | undefined) => void;
    onMinuteChange: (m: number | undefined) => void;
  };
}

function QuestionGroup({ wrapper1, wrapper2, wrapper3 }: QuestionGroupProps) {
  return (
    <>
      <DescriptionWrapper
        id={wrapper1.id}
        headmark={wrapper1.headmark}
        text={wrapper1.text}
      >
        <CustomRadioGroup
          row
          minWidth
          value={wrapper1.value}
          onValueChange={wrapper1.onValueChange}
          items={{
            "1": "예",
            "2": "아니오",
          }}
        />
      </DescriptionWrapper>

      <BlurWrapper blur={wrapper1.value !== "1"}>
        <DescriptionWrapper
          id={wrapper2.id}
          headmark={wrapper2.headmark}
          text={wrapper2.text}
          wrapperClassName="flex-row items-center justfy-between overflow-hidden max-w-[50rem] mb-4"
          className="my-0"
        >
          <DayControl day={wrapper2.day} onChange={wrapper2.onDayChange} />
        </DescriptionWrapper>

        <DescriptionWrapper
          id={wrapper3.id}
          headmark={wrapper3.headmark}
          text={wrapper3.text}
          wrapperClassName="flex-row items-center justfy-between overflow-hidden max-w-[50rem]"
          className="my-0"
        >
          <TimeControl
            hour={wrapper3.hour}
            minute={wrapper3.minute}
            onHourChange={wrapper3.onHourChange}
            onMinuteChange={wrapper3.onMinuteChange}
          />
        </DescriptionWrapper>
      </BlurWrapper>
    </>
  );
}
