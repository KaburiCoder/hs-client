import { Input, InputProps } from "@nextui-org/react";
import ErrorBox from "../error-box";

interface InputXProps extends InputProps {
  errorMessage?: string;
}
export function InputX({ errorMessage, ...props }: InputXProps) {
  return (
    <div className="flex flex-col gap-1">
      <Input {...props} />
      <ErrorBox errorMessage={errorMessage} noBorder/>
    </div>
  );
}
