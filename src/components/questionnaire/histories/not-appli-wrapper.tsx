import { BtnCheckBox } from "@/components/btn-checkbox";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React, { useImperativeHandle, useState } from "react";

interface Props extends ChildrenProps {
  id?: string;
  onCheckChange?: (value: boolean) => void;
}

export interface NotAppliWrapperRef {
  setChecked: (checked: boolean) => void;
}
export const NotAppliWrapper = React.forwardRef<NotAppliWrapperRef, Props>(
  ({ id, children, onCheckChange }: Props, ref) => {
    const [checked, setChecked] = useState(false);

    function handleCheckChange(checked: boolean) {
      setChecked(checked);
      onCheckChange?.(checked);
    }

    useImperativeHandle(ref, () => ({ setChecked }), []);

    return (
      <div id={id} className="flex flex-col sm:flex-row sm:items-center">
        {children}
        <BtnCheckBox
          className="m-2 min-w-24 sm:ml-auto"
          checked={checked}
          text="해당 없음"
          onCheckChange={handleCheckChange}
        />
      </div>
    );
  },
);

NotAppliWrapper.displayName = "NotAppliWrapper";
