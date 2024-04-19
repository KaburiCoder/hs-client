import { IHistory } from "@/stores/interfaces/history";
import { ISmoking, ISmokingResult } from "@/stores/interfaces/smoking";
import { useQuestionStore } from "@/stores/question-store";
import { useEffect } from "react";

interface UseQuestionArgs extends IHistory, ISmoking {}

export const useQuestion = ({ n1, n2, n3, n4, n4_1 }: UseQuestionArgs) => {
  const { history, setHistory, smoking, setSmoking } = useQuestionStore();

  useEffect(() => {
    if (n1) setHistory({ ...history, n1 });
    if (n2) setHistory({ ...history, n2 });
    if (n3 !== undefined) setHistory({ ...history, n3 });
  }, [n1, n2, n3]);

  return { history, smoking };
};
