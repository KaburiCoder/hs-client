import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

const GridBody = ({ children }: ChildrenProps) => {
  return (
    <div className="flex items-center border-b border-r border-orange-200 p-2">
      {children}
    </div>
  );
};

export default GridBody;
