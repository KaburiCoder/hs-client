import { paths } from "@/paths";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const initialTitle = "클릭소프트";

export function useNavTitle() {
  const pathname = usePathname();
  const [title, setTitle] = useState(initialTitle);
  const isWriteMode: boolean = title !== initialTitle;
  const titleComponent = <p className="font-bold text-inherit">{title}</p>;

  useEffect(() => {
    for (const path in navText) {
      if (pathname.startsWith(path)) {
        setTitle(navText[path]);
        return;
      }
      setTitle(initialTitle);
    }
  }, [pathname]);
  return { title, isWriteMode, titleComponent };
}

const navText = {
  [paths.qn.general]: "일반검진 문진표",
  [paths.qn.lifestyle]: "생활습관 문진표",
};
