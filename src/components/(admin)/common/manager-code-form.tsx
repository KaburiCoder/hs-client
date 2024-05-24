"use client";
import React, { useEffect, useState } from "react";
import { AdminCard } from "../admin-card";
import { Input } from "@nextui-org/react";
import ButtonL from "@/components/ui/button-l";
import { useFormState } from "react-dom";
import { saveManagerCode } from "@/lib/actions/save-manager-code";
import ErrorBox from "@/components/error-box";

interface Props {
  managerCode: string;
}
export default function ManagerCodeForm({ managerCode }: Props) {
  const [state, action] = useFormState(saveManagerCode, {});
  const [code, setCode] = useState(managerCode);

  return (
    <AdminCard
      header={{
        title: "관리자 코드 등록",
        description: "회원가입 시 입력해야하는 코드입니다.",
      }}
    >
      <form className="flex gap-2" action={action}>
        <Input
          name="managerCode"
          maxLength={20}
          placeholder="기본: z***l*4****"
          value={code}
          type="password"
          onChange={(e) => setCode(e.target.value)}
        />
        <ButtonL type="submit">저장</ButtonL>
      </form>
      <ErrorBox className="mt-2" errorMessage={state.errors?.managerCode} />
    </AdminCard>
  );
}