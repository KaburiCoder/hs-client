import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import React, { forwardRef } from "react";

interface Props {
  address: string;
}

export const AddrName = forwardRef<HTMLDivElement, Props>(
  ({ address }, ref) => {
    return (
      <div
        ref={ref}
        tabIndex={-1}
        className={cn(
          "flex items-center gap-2 text-sm text-gray-500 outline-none",
          address ? "" : "hidden",
        )}
      >
        <MapPin />
        {address}
      </div>
    );
  },
);
