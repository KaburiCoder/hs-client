import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

const GridHeader = ({ children }: ChildrenProps) => {
  return (
    <div className="flex-center border-b border-r border-orange-200 bg-amber-100 p-4">
      {children}
    </div>
  );
};

export default GridHeader;
