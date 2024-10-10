import { cn } from "@/lib/utils";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";

export const GridHeader = ({ children, className }: ChildrenClassNameProps) => {
  return (
    <div
      className={cn("flex-center bg-slate-200 p-2 font-semibold", className)}
    >
      {children}
    </div>
  );
};
