import { paths } from "@/paths";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

export default function AccountLayout({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col items-center">
      <header className="flex h-28 items-center justify-center">
        <img className="w-[200px] h-[58px]" src={paths.images.mainLogo} alt="MainLogo" width={200} height={58}/>
      </header>
      {children}
    </div>
  );
}
