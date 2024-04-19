import { useCallback, useRef, useState } from "react";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { NotAppliWrapper, NotAppliWrapperRef } from "./not-appli-wrapper";
import { scrollById } from "@/lib/utils/scroll.util";
import { ChildrenProps } from "kbr-nextjs-shared/props";

interface Args {
  scrollId: string;
}
export const useNotAppli = ({ scrollId }: Args) => {
  const [clearToggle, setClearToggle] = useState(false);
  const notAppliRef = useRef<NotAppliWrapperRef>(null);

  function handleNotApplicable(value: boolean): void {
    if (value) {
      setClearToggle((prev) => !prev);
      scrollById(scrollId);
      return;
    }
  }

  function setAppliChecked(value: boolean) {
    notAppliRef.current?.setChecked(value);
  }

  const Wrapper = useCallback(
    ({ id, children }: ChildrenProps & { id?: string }) => {
      return (
        <NotAppliWrapper
          id={id}
          ref={notAppliRef}
          onCheckChange={handleNotApplicable}
        >
          {children}
        </NotAppliWrapper>
      );
    },
    [],
  );

  return { clearToggle, NotAppliWrapper: Wrapper, setAppliChecked };
};
