"use client";
import React from "react";
import { CarouselX } from "@/components/carousel-x/carousel-x";
import LsNextButtons from "./ls-next-buttons";

import { useLifestyleController } from "./_hooks/use-lifestyle-controller";
import { useLsClear } from "./_hooks/use-ls-clear";

export default function LifestyleBody() {
  const { index, lastIndex, carouselItems, handlePrev, handleNext } =
    useLifestyleController();
  useLsClear();

  return (
    <main className="w-full select-none">
      <div className="mx-auto flex max-w-screen-lg2 flex-col gap-8 px-4 md:px-20">
        <CarouselX index={index}>{carouselItems}</CarouselX>

        <LsNextButtons
          index={index}
          lastIndex={lastIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </main>
  );
}
