import { questionIds } from '@/lib/objects/questionnaire-obj';
import { scrollById } from '@/lib/utils/scroll.util';
import { QnKeys, useConditionStore } from '@/stores/condition-store';
import { useLsErrorStore } from '@/stores/lifestyle/ls-error-store';
import { useQnCognitiveStore } from '@/stores/questionnaire/gn-cognitive-store';
import { useQnDepressionStore } from '@/stores/questionnaire/gn-depression-store';
import { useQuestionErrorStore } from '@/stores/questionnaire/question-error-store';
import { useQuestionStore } from '@/stores/questionnaire/question-store';
import { flattenJoiError } from 'health-screening-shared/joi';
import Joi from 'joi';
import React, { useMemo } from 'react'

export const useQnStoreController = () => {
  const addList = useConditionStore((state) => state.addList);
  const navKeys = useMemo(() => {
    const list = addList ?? [];
    return ["gen", ...list.filter((item) => item !== "elderly")];
  }, [addList]);
  const { setError, clearError } = useLsErrorStore()
  const setGenError = useQuestionErrorStore((state) => state.setError);
  const isEldery = useConditionStore(state => state.addList?.some(x => x === 'elderly'))
  const validateGen = useQuestionStore((state) => state.validate);
  const validateCognitive = useQnCognitiveStore((state) => state.validate);
  const validateDepression = useQnDepressionStore((state) => state.validate);

  function validate(selectedKey: QnKeys) {
    switch (selectedKey) {
      case "gen":
        return validateGen(isEldery);
      case "cognitive":
        return validateCognitive();
      case "depression":
        return validateDepression();
      default:
        throw new Error("Invalid selected key");
    }
  }

  function scrollToError(selectedKey: QnKeys, error: Joi.ValidationError) {
    const flattenError = flattenJoiError(error);
    const errorKey = Object.keys(flattenError)[0];

    setError(selectedKey as any, flattenError);
    scrollById(`${selectedKey}_${errorKey}`, 150);

    return;
  }

  // general 로직만 에러처리방식이 달라서.. 추후에 리펙토링 예정
  function scrollToErrorGen(error: Joi.ValidationError) {
    for (const args of errorScrollDatas) {
      if (scrollToErrorGenLogic(args, error)) return;
    }
  }

  // general 로직만 에러처리방식이 달라서.. 추후에 리펙토링 예정
  function scrollToErrorGenLogic({ key, key2, startsWith }: ErrorScrollArgs, error: Joi.ValidationError) {
    const flattenError = flattenJoiError(error);
    const findKey = Object.keys(flattenError)[0];
    const combinedKey = `${key}.${key2}`;
    if (
      (startsWith && findKey.startsWith(combinedKey)) ||
      findKey === combinedKey
    ) {
      scrollById((questionIds as any)[key][key2], 150);
      setGenError(flattenError)
      return true;
    }
  }

  function validateAndResult(selectedKey: QnKeys) {
    const { error, value } = validate(selectedKey);
    if (error) {
      if (selectedKey === 'gen') { // general 로직만 에러처리방식이 달라서.. 추후에 리펙토링 예정
        scrollToErrorGen(error);
      } else {
        scrollToError(selectedKey, error)
      }
      return { error: true }
    };
    clearError();

    return { value };
  }



  return {
    navKeys,
    validateAndResult,
  }
}

interface ErrorScrollArgs {
  key: keyof typeof questionIds;
  key2:
  | keyof typeof questionIds.history
  | keyof typeof questionIds.drink
  | keyof typeof questionIds.smoking
  | keyof typeof questionIds.activity
  | keyof typeof questionIds.addExam;
  startsWith?: boolean;
}

const errorScrollDatas: ErrorScrollArgs[] = [
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
]