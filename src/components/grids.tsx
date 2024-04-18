import { cn } from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";

export function Grids({ children }: ChildrenProps) {
  return (
    <div
      className={cn(
        "grid gap-[1px] p-[1px] bg-primary/30",
        "grid-cols-1 lg:grid-cols-2"
      )}
    >
      {children}
      <div className="bg-white hidden lg:block"></div>
    </div>
  );
}
