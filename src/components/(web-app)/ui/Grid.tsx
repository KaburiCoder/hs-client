import { cn } from "@/lib/utils";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";

export const Grid = ({
  children,
  className,
  gridColumnTemplate,
}: ChildrenClassNameProps & {
  gridColumnTemplate: string;
}) => {
  return (
    <div
      className={cn("grid gap-[1px] bg-slate-500", className)}
      style={{ gridTemplateColumns: gridColumnTemplate }}
    >
      {children}
    </div>
  );
};
