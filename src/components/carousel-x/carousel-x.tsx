import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { ChildrenClassNameProps, ChildrenProps } from "kbr-nextjs-shared/props";

interface CarouselXProps extends ChildrenProps {
  index: number;
  children: JSX.Element[];
}

export function CarouselX({ index, children }: CarouselXProps) {
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // 선택된 인덱스의 자식 요소의 높이를 측정하여 설정
      const selectedChild =
        containerRef.current.children?.[index]?.querySelector("section");

      setHeight(selectedChild?.offsetHeight ?? 0);
    }
  }, [index]);

  return (
    <div
      className={cn("transform overflow-hidden")}
      style={{ height: `${height}px` }}
    >
      <div
        className={cn("flex")}
        style={{
          transform: `translateX(${-index * 100}%)`,
          transition: "transform 0.3s ease",
        }}
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItemX({ children, className }: ChildrenClassNameProps) {
  return (
    <div
      role="group"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    >
      {children}
    </div>
  );
}
