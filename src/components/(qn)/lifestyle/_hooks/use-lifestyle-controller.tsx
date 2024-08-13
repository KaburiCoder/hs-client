import Joi from "joi";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { flattenJoiError } from "health-screening-shared/joi";
import { scrollById } from "@/lib/utils/scroll.util";
import { DisabledProps } from "../../../../lib/props/disabled-props";
import Smoking from "../smoking";
import Drinking from "../drinking";
import Exercise from "../exercise";
import Nutrition from "../nutrition";
import Overweight from "../overweight";
import { useLifestyleStoreController } from "./use-lifestyle-store-controller";
import { EvPaths } from "@/socket-io/ev-paths";
import { useEmitX } from "@/lib/hooks/use-emit-x";
import { LifestyleKeys } from "@/stores/condition-store";
import { EmitResultBase } from "health-screening-shared/interfaces.socket";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import { useCarouselNav } from "@/lib/hooks/use-carousel-nav";

export const useLifestyleController = () => {
  const { push } = useRouter();
  const argsRef = useRef<any>({});
  const { selectedItems, validate, setError, clearError } =
    useLifestyleStoreController();
  const { index, lastIndex, carouselItems, toNext, toPrev } = useCarouselNav({
    navKeys: selectedItems,
    itemGroup: itemGroup,
  });
  const { emitAck } = useEmitX<any, EmitResultBase<any>>({
    ev: EvPaths.SaveLifestyle,
    onSuccess: ({ status, message }) => {
      if (status === "error")
        return toast.error(message ?? "알 수 없는 오류가 발생했습니다.");

      push(paths.success("생활습관"));
    },
  });

  const selectedKey = useMemo(() => selectedItems[index], [index]);

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

    toNext();
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  return {
    index,
    lastIndex,
    carouselItems,
    handlePrev: toPrev,
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
