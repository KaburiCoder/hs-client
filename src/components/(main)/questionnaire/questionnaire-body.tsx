"use client";
import React, { useEffect } from "react";
import { useQnClear } from "./_hooks/use-qn-clear";
import { useQnNav } from "./_hooks/use-qn-nav";
import { CarouselX } from "@/components/carousel-x/carousel-x";
import LsNextButtons from "../lifestyle/ls-next-buttons";

const QuestionaireBody = () => {
  const { index, lastIndex, carouselItems, handleNext, handlePrev } =
    useQnNav();
  const { clear } = useQnClear();

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:px-20">
      <LsNextButtons
        index={index}
        lastIndex={lastIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <CarouselX index={index}>{carouselItems}</CarouselX>
    </div>
  );
};

export default QuestionaireBody;
