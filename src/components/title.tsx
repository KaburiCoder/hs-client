import { ChildrenProps } from "kbr-nextjs-shared/props";

export function Title({ children }: ChildrenProps) {
  return (
    <div className="flex py-2">
      <div className="w-1 bg-primary/50 mr-4"></div>
      <h2 className="text-2xl py-2 font-bold text-purple-500">{children}</h2>
    </div>
  );
}
