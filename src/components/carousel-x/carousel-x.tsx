import { cn } from "@/lib/utils";
import React, {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChildrenClassNameProps, ChildrenProps } from "kbr-nextjs-shared/props";

interface CarouselXProps extends ChildrenProps {
  index: number;
  children: JSX.Element[];
}

export function CarouselX({ index, children }: CarouselXProps) {
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const selectedChild =
        container.children?.[index]?.querySelector("section");
      if (selectedChild) {
        const updateHeight = () => setHeight(selectedChild.offsetHeight ?? 0);

        updateHeight();

        const resizeObserver = new ResizeObserver(() => {
          updateHeight();
        });

        resizeObserver.observe(selectedChild);

        return () => {
          resizeObserver.unobserve(selectedChild);
        };
      }
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
