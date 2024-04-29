import React from "react";

interface Props {
  errorMessage?: string;
}
export default function ErrorBox({ errorMessage }: Props) {
  if (!errorMessage) return <></>;

  return (
    <div className="rounded-lg border border-rose-300 bg-red-50 p-2 text-sm text-rose-500">
      {errorMessage}
    </div>
  );
}
