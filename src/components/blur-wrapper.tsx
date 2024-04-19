import { ChildrenProps } from "kbr-nextjs-shared/props";

interface BlurWrapperProps extends ChildrenProps {
  blur: boolean;
}

export function BlurWrapper({ blur, children }: BlurWrapperProps) {
  return (
    <div className={blur ? "pointer-events-none blur-[2px]" : ""}>
      {blur && (
        <div className="absolute left-0 top-0 z-50 h-full w-full rounded bg-slate-500/20" />
      )}
      {children}
    </div>
  );
}
