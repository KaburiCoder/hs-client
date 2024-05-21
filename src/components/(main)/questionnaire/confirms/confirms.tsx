"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useQuestionnaireConfirm } from "@/lib/hooks/use-questionnaire-confirm";
import { questionIds } from "@/lib/objects/questionnaire-obj";

export default function Confirms() {
  const { save, isLoading } = useQuestionnaireConfirm();

  return (
    <div className="mb-4 p-4">
      <Button
        id={questionIds.confirm}
        className="h-12 w-full"
        color="success"
        variant="flat"
        isLoading={isLoading}
        onClick={save}
      >
        작성 완료
      </Button>
    </div>
  );
}
