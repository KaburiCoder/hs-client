import { paths } from "@/paths";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import Image from "next/image";
import React from "react";

export default function AccountLayout({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col items-center">
      <header className="flex h-28 items-center justify-center">
        <Image src={paths.images.mainLogo} alt="MainLogo" width={200} height={58}/>
      </header>
      {children}
    </div>
  );
}
