"use client";
import React, { useEffect, useMemo, useState } from "react";
import Smoking from "./smoking";
import Drinking from "./drinking";
import { CarouselX, CarouselItemX } from "@/components/carousel-x/carousel-x";
import LsNextButtons from "./ls-next-buttons";
import { useLsSmokingStore } from "@/stores/lifestyle/ls-smoking-store";
import { flattenJoiError } from "health-screening-shared/joi";
import { scrollById } from "@/lib/utils/scroll.util";
import Joi from "joi";
import { useLsDrinkingStore } from "@/stores/lifestyle/ls-drinking-store";
import Exercise from "./exercise";
import { useLsExerciseStore } from "@/stores/lifestyle/ls-exercise-store";
import Nutrition from "./nutrition";
import { useLsNutritionStore } from "@/stores/lifestyle/ls-nutrition-store";
import Overweight from "./overweight";
import { useLsOverweightStore } from "@/stores/lifestyle/ls-overweight-store";

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

const useLifestyleController = () => {
  const [index, setIndex] = useState(0);
  const validateSmoking = useLsSmokingStore((state) => state.validate);
  const validateDrinking = useLsDrinkingStore((state) => state.validate);
  const validateExercise = useLsExerciseStore((state) => state.validate);
  const validateNutrition = useLsNutritionStore((state) => state.validate);
  const validateOverweight = useLsOverweightStore((state) => state.validate);
  const lastIndex = selectedItems.length - 1;
  const selectedKey = useMemo(() => selectedItems[index], [index]);
  const carouselItems = selectedItems.map((item) => {
    const Item = (itemGroup as any)[item] as React.ComponentType<any>;

    return (
      <CarouselItemX key={item}>
        <Item />
      </CarouselItemX>
    );
  });

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? 0 : --prev));
  }

  function errorToFocus(error: Joi.ValidationError) {
    console.log("error", error);

    const flattenError = flattenJoiError(error);
    const errorKey = Object.keys(flattenError)[0];

    scrollById(`${selectedKey}_${errorKey}`, 100);

    return;
  }

  function validate() {
    switch (selectedKey) {
      case "drinking":
        return validateDrinking();
      case "smoking":
        return validateSmoking();
      case "exercise":
        return validateExercise();
      case "nutrition":
        return validateNutrition();
      case "overweight":
        return validateOverweight();
      default:
        throw new Error("Invalid selected key");
    }
  }

  function handleNext() {
    const { error, value } = validate();
    if (error) return errorToFocus(error);

    setIndex((prev) => (prev === lastIndex ? lastIndex : ++prev));
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  return {
    index,
    lastIndex,
    carouselItems,
    handlePrev,
    handleNext,
  };
};

type LifestyleKeys =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

const itemGroup: {
  [key in LifestyleKeys]: () => JSX.Element;
} = {
  smoking: Smoking,
  drinking: Drinking,
  exercise: Exercise,
  nutrition: Nutrition,
  overweight: Overweight,
};
const selectedItems: LifestyleKeys[] = [
  "smoking",
  "exercise",
  "drinking",
  "overweight",
  "nutrition",
];
