import { Card } from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ChildrenProps {
  title: string;
  bottomIn: React.ReactNode;
}
export default function AccountHero({ title, bottomIn, children }: Props) {
  return (
    <main>
      <h1 className="text-center text-2xl">{title}</h1>
      <Card className="my-4 p-8">{children}</Card>
      <Card className="my-4 mb-12 flex flex-col items-center gap-2 px-8 py-4 text-sm">
        {bottomIn}
      </Card>
    </main>
  );
}
