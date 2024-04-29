import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

export default function AccountLayout({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col items-center">
      <header className="flex h-28 items-center justify-center">
        <div>Logo</div>
      </header>
      {children}
    </div>
  );
}
