import { ChildrenProps } from "kbr-nextjs-shared/props";

export function Title({ id, children }: ChildrenProps & { id?: string }) {
  return (
    <div id={id} className="flex py-2">
      <div className="mr-4 w-1 bg-primary/50"></div>
      <h2 className="py-2 text-2xl font-bold text-purple-500">{children}</h2>
    </div>
  );
}
