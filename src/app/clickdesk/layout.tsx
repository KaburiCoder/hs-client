"use client";
import { ClickdeskNav } from "@/components/(clickdesk)/ClickdeskNav";
import { Hero } from "@/components/Hero";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ChildrenProps {}

const ClickdeskLayout = ({ children }: Props) => {
  const { user } = useServerCookie();
  return (
    <Hero
      navComponent={<ClickdeskNav />}
      mainComponent={children}
      centerContent={user?.orgName}
    />
  );
};

export default ClickdeskLayout;
