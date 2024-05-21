import Joi from "joi";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { EvPaths } from "@/socket-io/ev-paths";
import { useEmitX } from "@/lib/hooks/use-emit-x";
import { LsSmokingState } from "@/stores/lifestyle/ls-smoking-store";
import { LsDrinkingState } from "@/stores/lifestyle/ls-drinking-store";
import { LsExerciseState } from "@/stores/lifestyle/ls-exercise-store";
import { LsNutritionState } from "@/stores/lifestyle/ls-nutrition-store";
import { LsOverweightState } from "@/stores/lifestyle/ls-overweight-store";
import { LifestyleKeys } from "@/stores/condition-store";
import { EmitResultBase } from "health-screening-shared/interfaces.socket";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

export const useLifestyleController = () => {
  const { push } = useRouter();
  const [index, setIndex] = useState(0);
  const argsRef = useRef<SaveQuestionnaireArgs>({});
  const { emitAck } = useEmitX<SaveQuestionnaireArgs, EmitResultBase<any>>({
    ev: EvPaths.SaveLifestyle,
    onSuccess: ({ status, message }) => {
      if (status === "error") {
        return toast.error(message ?? "알 수 없는 오류가 발생했습니다.");
      }

      push(paths.success("생활습관"));
    },
  });
  const { selectedItems, validate, setError, clearError } =
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

  function save() {
    emitAck(argsRef.current);
  }

  function handleNext() {
    const { error, value } = validate(selectedKey);
    if (error) return errorToFocus(error);
    clearError();

    argsRef.current = { ...argsRef.current, [selectedKey]: value };
    if (index === lastIndex) {
      return save();
    }

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

const itemGroup: {
  [key in LifestyleKeys]: (props: DisabledProps) => React.JSX.Element;
} = {
  smoking: Smoking,
  drinking: Drinking,
  exercise: Exercise,
  nutrition: Nutrition,
  overweight: Overweight,
};

interface SaveQuestionnaireArgs {
  history?: History;
  drinking?: LsDrinkingState;
  exercise?: LsExerciseState;
  nutrition?: LsNutritionState;
  overweight?: LsOverweightState;
  smoking?: LsSmokingState;
}
