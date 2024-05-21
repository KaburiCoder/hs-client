"use client";
import { EvPaths } from "@/socket-io/ev-paths";
import * as sock from "health-screening-shared/interfaces.socket";
import { useEffect, useRef } from "react";
import { QuestionnaireErrorResult } from "@/stores/question-error-store";
import { useEmitX } from "./use-emit-x";
import { useQnStoreController } from "@/components/(main)/questionnaire/_hooks/use-qn-controller";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

export const useQuestionnaireConfirm = () => {
  const { push } = useRouter()
  const isInitialMount = useRef(true);
  const { data, isLoading, emitAck } = useEmitX<
    sock.SaveQuestionnaireArgs,
    sock.SaveQuestionnaireResult
  >({
    ev: EvPaths.SaveQuestionnaire,
    onSuccess: ({ status, message }) => {
      if (status === 'error') {
        return toast.error(message ?? "알 수 없는 에러가 발생했습니다.");
      }

      push(paths.success("문진표"))
    }
  });
  const { error, setError, scrollToError, validate } = useQnStoreController(data?.error as QuestionnaireErrorResult);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return; // 초기 로드에선 return
    }

    setError(error);
    scrollToError();
  }, [error]);

  async function save() {
    const value = validate();

    if (value) {
      emitAck({ key: "", eiAuto: 0, ...value });
    }
  }

  return { save, isLoading };
};

