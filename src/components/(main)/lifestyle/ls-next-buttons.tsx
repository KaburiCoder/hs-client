import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface LsNextButtons {
  index: number;
  lastIndex: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LsNextButtons({
  index,
  lastIndex,
  onPrev,
  onNext,
}: LsNextButtons) {
  const isFirstPage = index === 0;
  const isLastPage = index === lastIndex;

  return (
    <div className="mb-8 flex gap-4">
      {!isFirstPage && (
        <Button className="flex-1" onClick={onPrev}>
          이전
        </Button>
      )}
      <Button className="flex-1 text-white" color="success" onClick={onNext}>
        {isLastPage ? "확인" : "다음"}
      </Button>
    </div>
  );
}
