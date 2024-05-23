import React, { useEffect, useState } from "react";
import { CarouselItemX } from "@/components/carousel-x/carousel-x";
import { DisabledProps } from "../props/disabled-props";

interface Args {
  navKeys: string[];
  itemGroup: { [key: string]: (props: DisabledProps) => React.JSX.Element };
}
export const useCarouselNav = ({ navKeys, itemGroup }: Args) => {
  const [index, setIndex] = useState(0);
  const lastIndex = navKeys.length - 1;
  const carouselItems = navKeys.map((item, i) => {
    const Item = (itemGroup as any)[item] as React.ComponentType<DisabledProps>;

    return (
      <CarouselItemX key={item}>
        <Item isDisabled={index !== i} />
      </CarouselItemX>
    );
  });

  function toPrev() {
    setIndex((prev) => (prev === 0 ? 0 : --prev));
  }

  function toNext() {
    setIndex((prev) => (prev === lastIndex ? lastIndex : ++prev));
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  return {
    index,
    lastIndex,
    carouselItems,
    toPrev,
    toNext,
  };
};
