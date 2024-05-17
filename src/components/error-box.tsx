import { cn } from "@/lib/utils";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ClassNameProps {
  errorMessage?: string;
}

export default function ErrorBox({ className, errorMessage }: Props) {
  if (!errorMessage) return <></>;

  return (
    <div
      className={cn(
        "rounded-lg border border-rose-300 bg-red-50 p-2 text-sm text-rose-500",
        className,
      )}
    >
      {errorMessage}
    </div>
  );
}
