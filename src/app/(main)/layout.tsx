import MainHeader from "@/components/(main)/root/header/header";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <MainHeader />
      <main className="w-full select-none">{children}</main>
    </>
  );
}
