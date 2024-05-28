"use client";
import { ChangePwForm } from "@/components/change-pw-inputs";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import React from "react";

export default function ChangePwInputs() {
  const { user } = useServerCookie();

  return <ChangePwForm userId={user?.userId} />;
}
