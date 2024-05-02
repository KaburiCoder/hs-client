"use client";
import { LottieSuccess } from "@/components/lottie/lottie-success";
import { paths } from "@/paths";
import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function QuestionnaireSuccessBody() {
  return (
    <main className="my-auto flex flex-col items-center justify-center gap-10 py-20">
      <h2 className="text-3xl font-bold">문진표 작성 완료</h2>
      <LottieSuccess className=" max-w-96" />
      <div className="text-lg">태블릿을 카운터로 가져다 주세요.</div>
      <Button className="min-w-56" color="primary" href={paths.root} as={Link}>
        확인
      </Button>
    </main>
  );
}
