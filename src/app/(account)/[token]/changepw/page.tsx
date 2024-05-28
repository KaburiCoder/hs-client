import ChangePwBody from "@/components/(account)/changepw/changepw-body";
import { validateToken } from "@/lib/api/server/validate-token";
import React from "react";

interface Props {
  params: { token: string };
}

export default async function ChangePwPage({ params: { token } }: Props) {
  const result = await validateToken({ token, tokenType: "changePw" });
  return <ChangePwBody userId={result?.userId} />;
}
