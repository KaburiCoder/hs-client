import { EnvData } from "@/contants/env-data";
import { natoSansKR } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { Providers } from "../providers/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "클릭소프트 부가서비스",
  description: "클릭소프트 부가서비스 관리하는 페이지입니다.",
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
