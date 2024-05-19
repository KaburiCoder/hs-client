import { paths } from "@/paths";
import * as sock from "health-screening-shared/interfaces.socket";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import { Button, Card, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LifestyleKeys, useConditionStore } from "@/stores/condition-store";
import { useQuestionStore } from "@/stores/question-store";
import { useEmit } from "@/socket-io/hooks/use-emit";
import { EvPaths } from "@/socket-io/ev-paths";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import LifestyleSelectModal from "./lifestyle-select-modal";
interface PatientCardProps {
  data: sock.ReceptionPatient;
}

export function PatientCard({ data }: PatientCardProps) {
  const { name, birthday, targetName, kinds, diagnose } = data;
  const setPatient = useSelectionPatientStore((state) => state.setPatient);
  const setSelectedItems = useConditionStore(
    (state) => state.setSelectedLifestyles,
  );
  const { nav } = useNavQuestionnaire();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { push } = useRouter();
  function handlePush(k: sock.QuestionnaireKind): void {
    setPatient(data);
    if (
      k.kind === sock.EQuestionnaireKind.일반검진 &&
      k.type === sock.EQuestionnaireType.일반
    ) {
      nav(data.eiAuto, k);
    }

    if (k.kind === sock.EQuestionnaireKind.생활습관) {
      const gen = kinds.find(
        (kind) =>
          kind.kind === sock.EQuestionnaireKind.일반검진 &&
          k.type === sock.EQuestionnaireType.일반,
      );
      if (!gen?.written) {
        return alert("일반검진 문진표를 먼저 작성해야합니다.");
      }
      onOpen();
    }

    if (
      k.kind === sock.EQuestionnaireKind.구강검진 &&
      k.type === sock.EQuestionnaireType.일반
    ) {
    }
  }

  function handleLifestyleSelect(value: LifestyleKeys[]): void {
    setSelectedItems(value);
    push(paths.lifestyle);
  }

  return (
    <Card className="flex flex-col justify-between gap-4 p-4">
      <LifestyleSelectModal
        diagnose={diagnose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSelect={handleLifestyleSelect}
      />
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div>
          <p className="text-sm font-bold uppercase">{birthday}</p>
          <small className="text-default-500">{targetName}</small>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {kinds.map((k, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between border-b border-purple-200 p-2"
            >
              <h3 className="text-base">
                {k.name}
                {k.addExam ? "-추가" : ""}
              </h3>
              <Button
                color={k.written ? "success" : "primary"}
                variant="flat"
                onClick={handlePush.bind(null, k)}
              >
                {k.written ? "수정" : "작성"}
              </Button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

const useNavQuestionnaire = () => {
  const { setIsAddExam } = useConditionStore();
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
    if (!k.written) return push(paths.questionnaire);

    setIsAddExam(k.addExam);
    emitAck({
      key: user?.roomKey,
      eiAuto: eiAuto,
      addExam: k.addExam,
      kind: k.kind,
      type: k.type,
    });
  }

  return { nav };
};
