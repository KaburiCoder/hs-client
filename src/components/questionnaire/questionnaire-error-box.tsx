import {
  QuestionnaireErrorResult,
  useQuestionErrorStore,
} from "@/stores/question-error-store";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { memo } from "react";

interface QuestionaireErrorBoxProps extends ChildrenProps {
  errorKeys: (keyof QuestionnaireErrorResult)[];
}

const _QuestionnaireErrorBox = ({
  errorKeys,
  children,
}: QuestionaireErrorBoxProps) => {
  const error = useQuestionErrorStore((state) => state.error);
  const errorKey = error ? Object.keys(error)?.[0] : "";

  const isError = errorKeys.includes(
    errorKey as keyof QuestionnaireErrorResult,
  );

  return (
    <div className={isError ? "border-2 border-rose-300 px-1 pb-2 pt-0" : ""}>
      {children}
      {/* {isError && <div className="text-rose-500">{(error as any)[errorKey]}</div>} */}
    </div>
  );
};

const QuestionnaireErrorBox = memo(_QuestionnaireErrorBox);
export { QuestionnaireErrorBox };
