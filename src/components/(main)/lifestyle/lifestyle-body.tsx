"use client";
import React, { useEffect, useMemo, useState } from "react";
import { CarouselX } from "@/components/carousel-x/carousel-x";
import LsNextButtons from "./ls-next-buttons";

import { useLifestyleController } from "./hooks/use-lifestyle-controller";

export default function LifestyleBody() {
  const { index, lastIndex, carouselItems, handlePrev, handleNext } =
    useLifestyleController();
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
export interface DisabledProps {
  isDisabled?: boolean;
}
