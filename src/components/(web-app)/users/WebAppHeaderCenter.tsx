"use client";
import { webAppPathNames } from "@/shared";
import { usePathname } from "next/navigation";

export const WebAppHeaderCenter = () => {
  const pathname = usePathname();

  return <>{webAppPathNames[pathname]}</>;
};

 