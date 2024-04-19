import { Description, SparkleDescription } from "@/components/description";
import React from "react";
import DrinksCc from "./drinks-cc";

export default function Drinks7d1() {
  return (
    <>
      <Description headmark="7-1" text="술을 마시는 날은 보통 어느 정도 마십니까?" />
      <SparkleDescription 
        text={`잔 또는 병 또는 캔 또는 cc 중 한 곳에만 작성해 주십시오.
        (술종류는 복수응답 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 술 종류에 표기)`}
      />
      <DrinksCc />
    </>
  );
}
