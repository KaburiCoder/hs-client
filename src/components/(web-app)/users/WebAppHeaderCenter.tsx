"use client";
import { paths } from "@/paths";
import { usePathname } from "next/navigation";
import React from "react";

export const WebAppHeaderCenter = () => {
  const pathname = usePathname();

  return <>{pathNames[pathname]}</>;
};

const pathNames = {
  [paths.webApp("users")]: "사용자 리스트",
};
