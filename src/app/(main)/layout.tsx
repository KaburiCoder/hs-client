import MainHeader from "@/components/(main)/header";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

export default function MainLayout({children}: ChildrenProps) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
