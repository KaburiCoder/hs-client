import { cn } from "@/lib/utils";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ClassNameProps {
  errorMessage?: string;
  noBorder?: boolean;
}

export default function ErrorBox({ className, errorMessage, noBorder }: Props) {
  if (!errorMessage) return <></>;

  return (
    <div
      className={cn(
        "rounded-lg border-rose-300  text-sm text-rose-500",
        noBorder ? "px-2" : "border bg-red-50 p-2",
        className,
      )}
    >
      {errorMessage}
    </div>
  );
}
