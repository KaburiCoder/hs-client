import MainHeader from "@/components/(qn)/root/header/header";
import { BaseLayout } from "@/components/layouts/MainLayout";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <MainHeader />
      <BaseLayout>{children}</BaseLayout>
    </>
  );
};

export default MainLayout;
