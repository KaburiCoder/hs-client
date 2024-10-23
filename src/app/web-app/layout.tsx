import { WebAppHeaderCenter } from "@/components/(web-app)/users/WebAppHeaderCenter";
import WebAppNav from "@/components/(web-app)/WebAppNav";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import type { Metadata } from "next";
import { Hero } from "../../components/Hero";

interface Props extends ChildrenProps {}

export async function generateMetadata() {
  return {
    title: "tClick 관리자 페이지",
    description: "tClick 관리자 페이지입니다.",
  } satisfies Metadata;
}

export default function WebAppLayout({ children }: Props) {
  return (
    <Hero
      startContent={
        <h2 className="text-lg font-semibold">tClick 관리자 페이지</h2>
      }
      centerContent={<WebAppHeaderCenter />}
      navComponent={<WebAppNav />}
      mainComponent={<div className="mx-auto p-4">{children}</div>}
    />
  );
}
