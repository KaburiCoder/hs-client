"use client";
import React, { useEffect } from "react";
import { useQnClear } from "./_hooks/use-qn-clear";
import { useQnController } from "./_hooks/use-qn-controller";
import { CarouselX } from "@/components/carousel-x/carousel-x";
import LsNextButtons from "../lifestyle/ls-next-buttons";
import ScrollDownAnimation from "./scroll-down-animation/scroll-down-animation";

const QuestionaireBody = () => {
  const { isLoading, index, lastIndex, carouselItems, handleNext, handlePrev } =
    useQnController();
  const { clear } = useQnClear();

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:px-20">
      <CarouselX index={index}>{carouselItems}</CarouselX>
      <LsNextButtons
        index={index}
        lastIndex={lastIndex}
        isLoading={isLoading}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <ScrollDownAnimation />
    </div>
  );
};

export default QuestionaireBody;
