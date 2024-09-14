import type { Metadata } from "next";
import "./globals.css";
import { natoSansKR } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "../providers/providers";
import { EnvData } from "@/contants/env-data";
import { unstable_noStore as noStore } from "next/cache";
import Script from "next/script";

export const metadata: Metadata = {
  title: "클릭소프트 웹",
  description: "클릭소프트 웹 부가서비스 관리하는 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (EnvData.NEXT_ENV === "ingress") noStore();
  return (
    <html lang="en">
      <body className={cn(natoSansKR.className)}>
        <Providers>
          {children}
          <div id="dialog-root"></div>
        </Providers>
      </body>
    </html>
  );
}
