import {
  LsErrorResult,
  useLsErrorStore,
} from "@/stores/lifestyle/ls-error-store";
import {
  QuestionnaireErrorResult,
  useQuestionErrorStore,
} from "@/stores/question-error-store";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { memo } from "react";
import ErrorBox from "../error-box";
import { LifestyleKeys } from "../(main)/lifestyle/hooks/use-lifestyle-controller";

interface ErrorBoxProps<T> extends ChildrenProps {
  errorKeys: (keyof T)[];
}

const _QuestionnaireErrorBox = ({
  errorKeys,
  children,
}: ErrorBoxProps<QuestionnaireErrorResult>) => {
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

interface LsErrorBoxProps extends ErrorBoxProps<LsErrorResult> {
  selectedKey: LifestyleKeys;
}

export const LsErrorBox = ({
  selectedKey,
  errorKeys,
  children,
}: LsErrorBoxProps) => {
  const selectedErrorKey = useLsErrorStore((state) => state.selectedKey);
  const error = useLsErrorStore((state) => state.error);
  const errorKey = error ? Object.keys(error)?.[0] : "";
  const isError =
    selectedKey === selectedErrorKey &&
    errorKey &&
    errorKeys.includes(errorKey as any);
  const errorMessage = isError ? (error as any)?.[errorKey] : undefined;
  return (
    <div className={isError ? "border-b-2 border-rose-300 pb-2 pt-0" : ""}>
      {children}
      <ErrorBox className="mt-2" errorMessage={errorMessage} />
    </div>
  );
};

const QuestionnaireErrorBox = memo(_QuestionnaireErrorBox);
export { QuestionnaireErrorBox };
