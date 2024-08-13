import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";
import { Hero } from "../../components/Hero";
import AdminNav from "../../components/(admin)/AdminNav";
import AdminHeaderCenter from "@/components/(admin)/AdminHeaderCenter";
import type { Metadata } from "next";

interface Props extends ChildrenProps {}

export async function generateMetadata() {
  return {
    title: "클릭 웹 관리자 페이지",
    description: "클릭 웹 관리자 페이지입니다.",
  } satisfies Metadata;
}

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
