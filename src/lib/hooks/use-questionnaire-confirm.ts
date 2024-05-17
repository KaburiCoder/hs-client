"use client";
import { useQuestionStore } from "@/stores/question-store";
import { useServerCookie } from "./use-server-cookie";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { useEmit } from "@/socket-io/hooks/use-emit";
import { EvPaths } from "@/socket-io/ev-paths";
import { QuestionnaireSchema } from "health-screening-shared/joi";
import * as sock from "health-screening-shared/interfaces.socket";
import { useEffect, useRef } from "react";
import { useValidate } from "./use-validate";
import { IQuestionnaire } from "health-screening-shared/interfaces";
import { questionIds } from "../objects/questionnaire-obj";
import { QuestionnaireErrorResult, useQuestionErrorStore } from "@/stores/question-error-store";
import { scrollById } from "../utils/scroll.util";
import { useConditionStore } from "@/stores/condition-store";

export const useQuestionnaireConfirm = () => {
  const { user } = useServerCookie();
  const setError = useQuestionErrorStore((state) => state.setError);
  const patient = useSelectionPatientStore((state) => state.patient);
  const n1 = useQuestionStore((state) => state.n1);
  const n2 = useQuestionStore((state) => state.n2);
  const n3 = useQuestionStore((state) => state.n3);
  const n4 = useQuestionStore((state) => state.n4);
  const n4_1 = useQuestionStore((state) => state.n4_1);
  const n5 = useQuestionStore((state) => state.n5);
  const n5_1 = useQuestionStore((state) => state.n5_1);
  const n6 = useQuestionStore((state) => state.n6);
  const n6_1 = useQuestionStore((state) => state.n6_1);
  const n7 = useQuestionStore((state) => state.n7);
  const n7_1 = useQuestionStore((state) => state.n7_1);
  const n7_2 = useQuestionStore((state) => state.n7_2);
  const n8_1 = useQuestionStore((state) => state.n8_1);
  const n8_2 = useQuestionStore((state) => state.n8_2);
  const n9_1 = useQuestionStore((state) => state.n9_1);
  const n9_2 = useQuestionStore((state) => state.n9_2);
  const n10 = useQuestionStore((state) => state.n10);
  const n11 = useQuestionStore((state) => state.n11);
  const n12 = useQuestionStore((state) => state.n12);
  const n13_1 = useQuestionStore((state) => state.n13_1);
  const n13_2 = useQuestionStore((state) => state.n13_2);
  const n13_3 = useQuestionStore((state) => state.n13_3);
  const n13_4 = useQuestionStore((state) => state.n13_4);
  const n13_5 = useQuestionStore((state) => state.n13_5);
  const n13_6 = useQuestionStore((state) => state.n13_6);
  const n14 = useQuestionStore((state) => state.n14);
  const n15 = useQuestionStore((state) => state.n15);
  const { isAddExam } = useConditionStore()
  const isInitialMount = useRef(true);
  const { data, isLoading, emitAck } = useEmit<
    sock.SaveQuestionnaireArgs,
    sock.SaveQuestionnaireResult
  >({
    ev: EvPaths.SaveQuestionnaire,
  });
  const { validateAndGetResult, validateError } = useValidate<any, QuestionnaireErrorResult>();
  const errorResult =
    validateError?.error ??
    (data?.error as QuestionnaireErrorResult | undefined);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return; // 초기 로드에선 return
    }

    console.table(errorResult);

    setError(errorResult);

    function errorToScroll({ key, key2, startsWith }: ErrorScrollArgs) {
      if (!errorResult) return;

      const findKey = Object.keys(errorResult)?.[0];
      const combinedKey = `${key}.${key2}`;
      if (
        (startsWith && findKey.startsWith(combinedKey)) ||
        findKey === combinedKey
      ) {
        scrollById((questionIds as any)[key][key2], 150);
        return true;
      }
    }

    for (const args of [
      { key: "history", key2: "n3" },
      { key: "smoking", key2: "n4" },
      { key: "smoking", key2: "n4_1", startsWith: true },
      { key: "smoking", key2: "n5" },
      { key: "smoking", key2: "n5_1", startsWith: true },
      { key: "smoking", key2: "n6" },
      { key: "smoking", key2: "n6_1" },
      { key: "drink", key2: "n7_1" },
      { key: "drink", key2: "n7_2" },
      { key: "drink", key2: "n7", startsWith: true },
      { key: "activity", key2: "n8_1" },
      { key: "activity", key2: "n8_2", startsWith: true },
      { key: "activity", key2: "n9_1" },
      { key: "activity", key2: "n9_2", startsWith: true },
      { key: "activity", key2: "n10" },
      { key: "addExam", key2: "n11" },
      { key: "addExam", key2: "n12" },
      { key: "addExam", key2: "n13_1" },
      { key: "addExam", key2: "n13_2" },
      { key: "addExam", key2: "n13_3" },
      { key: "addExam", key2: "n13_4" },
      { key: "addExam", key2: "n13_5" },
      { key: "addExam", key2: "n13_6" },
      { key: "addExam", key2: "n14" },
      { key: "addExam", key2: "n15" },
    ] as ErrorScrollArgs[]) {
      if (errorToScroll(args)) return;
    }
  }, [errorResult]);

  async function save(): Promise<boolean> {
    if (!user?.roomKey || !patient?.eiAuto) return false;

    const value = validateAndGetResult<IQuestionnaire>(QuestionnaireSchema, {
      history: { n1, n2, n3 },
      smoking: { n4, n4_1, n5, n5_1, n6, n6_1 },
      drink: { n7, n7_1, n7_2 },
      activity: { n8_1, n8_2, n9_1, n9_2, n10 },
      addExam: isAddExam ? { n11, n12, n13_1, n13_2, n13_3, n13_4, n13_5, n13_6, n14, n15 } : undefined,
      isAddExam,
    });

    if (value) {
      emitAck({
        key: user.roomKey,
        eiAuto: patient.eiAuto,
        ...value,
      });
    }

    return !!value;
  }

  return { save, isLoading };
};

interface ErrorScrollArgs {
  key: keyof typeof questionIds;
  key2:
  | keyof typeof questionIds.history
  | keyof typeof questionIds.drink
  | keyof typeof questionIds.smoking
  | keyof typeof questionIds.activity;
  startsWith?: boolean;
}
