import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  CheckboxGroup,
} from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import BigCheckBox from "@/components/BigCheckBox";
import sock from "health-screening-shared/interfaces.socket";
import { LifestyleKeys } from "@/stores/condition-store";

interface Props extends ChildrenProps {
  status: sock.QuestionnaireStatus;
  diagnose: sock.QuestionnaireDiagnose;
  isOpen: boolean;
  onOpenChange: () => void;
  onSelect: (value: LifestyleKeys[]) => void;
}

export default function LifestyleSelectModal({
  status,
  diagnose,
  isOpen,
  onOpenChange,
  onSelect,
}: Props) {
  const diagnoses = GetDiagnoseArray(diagnose);
  const [selected, setSelected] = React.useState<LifestyleKeys[]>(
    diagnoses as LifestyleKeys[],
  );

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              생활습관 문진표
            </ModalHeader>
            <ModalBody>
              <div>작성할 문진표를 선택하세요.</div>
              <CheckboxGroup
                value={selected}
                onValueChange={(value) => setSelected(value as LifestyleKeys[])}
              >
                <BigCheckBox value={"smoking"} isDisabled={!diagnose.smoking}>
                  <WrittenText text="흡연" written={status.lifestyle.smoking} />
                </BigCheckBox>
                <BigCheckBox value={"drinking"} isDisabled={!diagnose.drinking}>
                  <WrittenText text="음주" written={status.lifestyle.drinking} />
                </BigCheckBox>
                <BigCheckBox value={"exercise"}>
                  <WrittenText text="운동" written={status.lifestyle.exercise} />
                </BigCheckBox>
                <BigCheckBox value={"nutrition"}>
                  <WrittenText text="영양" written={status.lifestyle.nutrition} />
                </BigCheckBox>
                <BigCheckBox value={"overweight"}>
                  <WrittenText text="비만" written={status.lifestyle.overweight} />
                </BigCheckBox>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                닫기
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onSelect(selected);
                  onClose();
                }}
              >
                선택
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

function WrittenText({ text, written }: { text: string; written: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div>{text}</div>
      {written && (
        <div className="rounded border-green-800 bg-green-500 p-1 text-sm text-white">
          작성됨
        </div>
      )}
    </div>
  );
}

function GetDiagnoseArray(diagnose: sock.QuestionnaireDiagnose) {
  const keys: string[] = [];
  for (const key in diagnose) {
    if ((diagnose as any)[key]) {
      keys.push(key);
    }
  }

  return keys;
}
