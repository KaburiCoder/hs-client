import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";
import { Hero } from "../../components/Hero";
import AdminNav from "../../components/(admin)/AdminNav";
import AdminHeaderCenter from "@/components/(admin)/AdminHeaderCenter";

interface Props extends ChildrenProps {}

export default function AdminLayout({ children }: Props) {
  return (
    <Hero
      startContent={<h2 className="text-lg font-semibold">관리자 페이지</h2>}
      centerContent={<AdminHeaderCenter />}
      navComponent={<AdminNav />}
      mainComponent={<div className="mx-auto p-4">{children}</div>}
    />
  );
}
