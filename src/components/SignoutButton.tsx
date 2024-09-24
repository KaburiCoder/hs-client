"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { useSignout } from "@/lib/hooks/use-signout";

export const SignoutButton = () => {
  const { handleSignout } = useSignout();

  return (
    <Button className="w-full" color="danger" onClick={handleSignout}>
      로그아웃
    </Button> 
  );
};
