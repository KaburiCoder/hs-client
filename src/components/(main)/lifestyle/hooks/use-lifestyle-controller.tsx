import Joi from "joi";
import React, { useEffect, useMemo, useState } from "react";
import { flattenJoiError } from "health-screening-shared/joi";
import { scrollById } from "@/lib/utils/scroll.util";
import { CarouselItemX } from "@/components/carousel-x/carousel-x";
import { DisabledProps } from "../lifestyle-body";
import Smoking from "../smoking";
import Drinking from "../drinking";
import Exercise from "../exercise";
import Nutrition from "../nutrition";
import Overweight from "../overweight";
import { useLifestyleStoreController } from "./use-lifestyle-store-controller";

export const useLifestyleController = () => {
  const [index, setIndex] = useState(0);
  const { validate, setError, clearError, clearAll } =
    useLifestyleStoreController();

  const lastIndex = selectedItems.length - 1;
  const selectedKey = useMemo(() => selectedItems[index], [index]);
  const carouselItems = selectedItems.map((item, i) => {
    const Item = (itemGroup as any)[item] as React.ComponentType<DisabledProps>;

    return (
      <CarouselItemX key={item}>
        <Item isDisabled={index !== i} />
      </CarouselItemX>
    );
  });

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? 0 : --prev));
  }

  function errorToFocus(error: Joi.ValidationError) {
    const flattenError = flattenJoiError(error);
    const errorKey = Object.keys(flattenError)[0];

    setError(selectedKey, flattenError);
    scrollById(`${selectedKey}_${errorKey}`, 150);

    return;
  }

  function handleNext() {
    const { error, value } = validate(selectedKey);
    if (error) return errorToFocus(error);
    clearError();
    setIndex((prev) => (prev === lastIndex ? lastIndex : ++prev));
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  useEffect(() => {
    return () => {
      clearAll();
    };
  }, []);
  
  return {
    index,
    lastIndex,
    carouselItems,
    handlePrev,
    handleNext,
  };
};

export type LifestyleKeys =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

const itemGroup: {
  [key in LifestyleKeys]: (props: DisabledProps) => React.JSX.Element;
} = {
  smoking: Smoking,
  drinking: Drinking,
  exercise: Exercise,
  nutrition: Nutrition,
  overweight: Overweight,
};

const selectedItems: LifestyleKeys[] = [
  "overweight",
  "exercise",
  "nutrition",
  "drinking",
  "smoking",
];
