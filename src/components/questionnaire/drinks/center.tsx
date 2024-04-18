import { cn } from "@/lib/utils";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";

export function Center({ children, className }: ChildrenClassNameProps) {
  return (
    <div className={cn("flex justify-center items-center p-2 bg-white", className)}>
      {children}
    </div>
  );
}
