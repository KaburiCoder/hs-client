import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";
import { Hero } from "../../components/hero";
import AdminNav from "../../components/(admin)/admin-nav";

export default function AdminLayout({ children }: ChildrenProps) {
  return (
    <Hero
      startContent={<h2 className="text-lg font-semibold">관리자 페이지</h2>}
      centerContent={"헬로"}
      navComponent={<AdminNav />}
      mainComponent={<div className="max-w-screen-lg mx-auto p-4">{children}</div>}
    />
  );
}
