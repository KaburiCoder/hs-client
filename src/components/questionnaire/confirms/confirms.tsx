"use client";

import { ISmokingResult } from "health-screening-shared/interfaces";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useQuestionnaireConfirm } from "@/lib/hooks/use-questionnaire-confirm";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

export default function Confirms() {
  const { save } = useQuestionnaireConfirm();
  const { push } = useRouter();
  async function handleConfirm() {
    save().then((success) => {
      if (success) push(paths.questionnaireSuccess);
    });
  }

  return (
    <div className="p-4 mb-4">
      <Button className="w-full" color="primary" onClick={handleConfirm}>
        작성 완료
      </Button>
    </div>
  );
}
