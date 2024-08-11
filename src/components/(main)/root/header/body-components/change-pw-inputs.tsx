"use client";
import { ChangePwForm } from "@/components/ChangePwInputs";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import React from "react";

export default function ChangePwInputs() {
  const { user } = useServerCookie();

  return <ChangePwForm userId={user?.userId} />;
}
