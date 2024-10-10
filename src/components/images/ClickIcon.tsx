"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { paths } from "@/shared/paths";
import { usePathname, useRouter } from "next/navigation";

export default function ClickIcon() {
  const { push } = useRouter();
  const pathname = usePathname();
  function handleClick(): void {
    if (pathname.startsWith(paths.qn.root)) {
      push(paths.qn.root);
    } else {
      push(paths.root);
    }
  }

  return (
    <Image
      className="rounded-none hover:cursor-pointer"
      src={paths.images.eClickIco}
      alt="클릭 아이콘"
      width={34}
      height={34}
      onClick={handleClick}
    />
  );
}
