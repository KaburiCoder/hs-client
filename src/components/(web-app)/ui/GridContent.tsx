import { cn } from "@/lib/utils";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";

export const GridContent = ({
  children,
  className,
}: ChildrenClassNameProps) => {
  return (
    <div className={cn("flex items-center bg-white p-2", className)}>
      {children}
    </div>
  );
};
