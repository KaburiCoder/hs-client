"use client";
import { LottieSuccess } from "@/components/lottie/LottieSuccess";
import { paths } from "@/paths";
import { Button, Link } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function SuccessTitle() {
  const params = useSearchParams();
  const kind = params.get("kind");

  return <h2 className="text-3xl font-bold">{`${kind} 작성 완료`}</h2>;
}
export default function SuccessBody() {
  return (
    <main className="my-auto flex flex-col items-center justify-center gap-10 py-20">
      <Suspense>
        <SuccessTitle />
      </Suspense>
      <LottieSuccess className=" max-w-96" />
      <div className="text-lg">태블릿을 카운터로 가져다 주세요.</div>
      <Button className="min-w-56" color="primary" href={paths.root} as={Link}>
        확인
      </Button>
    </main>
  );
}
