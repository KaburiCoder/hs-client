import { cn } from "@/lib/utils";
import { ChildrenClassNameProps, ChildrenProps } from "kbr-nextjs-shared/props";

interface BlurWrapperProps extends ChildrenClassNameProps {
  blur: boolean;
}

export function BlurWrapper({ blur, className, children }: BlurWrapperProps) {
  return (
    <div
      className={cn(
        blur ? "pointer-events-none relative p-2 opacity-50" : "",
        className,
      )}
    >
      {blur && (
        <div className="absolute left-0 top-0 z-10 h-full w-full rounded-2xl bg-slate-500/10" />
      )}
      {children}
    </div>
  );
}
