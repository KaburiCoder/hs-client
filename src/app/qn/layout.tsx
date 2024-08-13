import MainHeader from "@/components/(qn)/root/header/header";
import { BaseLayout } from "@/components/layouts/MainLayout";
import { SocketIOProvider } from "@/providers/SocketIOProvider";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "클릭 웹 문진표",
    description: "클릭 웹 문진표 페이지입니다.",
  } satisfies Metadata;
}

export default function QnLayout({ children }: ChildrenProps) {
  return (
    <SocketIOProvider>
      <MainHeader />
      <BaseLayout>{children}</BaseLayout>
    </SocketIOProvider>
  );
}
