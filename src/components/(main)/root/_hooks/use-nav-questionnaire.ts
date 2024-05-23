'use client'
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { paths } from "@/paths";
import { EvPaths } from "@/socket-io/ev-paths";
import { useEmit } from "@/socket-io/hooks/use-emit";
import { QnKeys, useConditionStore } from "@/stores/condition-store";
import { useQuestionStore } from "@/stores/questionnaire/question-store";
import { useRouter } from "next/navigation";
import * as sock from "health-screening-shared/interfaces.socket";

export const useNavQuestionnaire = () => {
  const { setAddList } = useConditionStore();
  const { push } = useRouter();
  const { setGenState } = useQuestionStore();
  const { user } = useServerCookie();
  const { emitAck } = useEmit<any, any>({
    ev: EvPaths.GetQuestionnaire,
    onSuccess: ({ data }) => {
      setGenState({
        ...data.history,
        ...data.smoking,
        ...data.drink,
        ...data.activity,
        ...data.addExam,
      });
      push(paths.questionnaire);
    },
  });

  function nav(eiAuto: number, k: sock.QuestionnaireKind) {
    const isEldery = k.addList?.some(x => x === 'elderly')

    setAddList(k.addList as QnKeys[]);

    if (!k.written) return push(paths.questionnaire);

    emitAck({
      key: user?.roomKey,
      eiAuto: eiAuto,
      addExam: isEldery,
      kind: k.kind,
      type: k.type,
    });
  }

  return { nav };
};
