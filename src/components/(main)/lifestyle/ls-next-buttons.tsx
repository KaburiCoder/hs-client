import ButtonL from "@/components/ui/ButtonL";
import React from "react";

interface LsNextButtons {
  index: number;
  lastIndex: number;
  isLoading?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LsNextButtons({
  index,
  lastIndex,
  isLoading,
  onPrev,
  onNext,
}: LsNextButtons) {
  const isFirstPage = index === 0;
  const isLastPage = index === lastIndex;

  return (
    <div className="mb-8 flex gap-4">
      {!isFirstPage && (
        <ButtonL className="flex-1" variant={"outline"} onClick={onPrev}>
          이전
        </ButtonL>
      )}
      <ButtonL
        className="flex-1 text-white"
        color="success"
        isLoading={isLoading}
        onClick={onNext}
      >
        {isLastPage ? "확인" : "다음"}
      </ButtonL>
    </div>
  );
}
