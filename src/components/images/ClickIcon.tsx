"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";

export default function ClickIcon() {
  const { push } = useRouter();

  return (
    <Image
      className="rounded-none hover:cursor-pointer"
      src={paths.images.eClickIco}
      alt="클릭 아이콘"
      width={34}
      height={34}
      onClick={() => push(paths.root)}
    />
  );
}
