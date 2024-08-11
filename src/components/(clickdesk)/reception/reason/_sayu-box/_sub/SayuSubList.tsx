import React from "react";
import { SayuSub } from "./SayuSub";
import { ReasonSub } from "@/models/reason-state";

export const SayuSubList = ({ subs }: { subs: ReasonSub[] | undefined }) => {
  if (!subs) return <></>;

  return (
    <ul className="flex-1 px-4 pb-2">
      {subs.map((sub) => (
        <SayuSub key={sub.text} text={sub.text} />
      ))}
    </ul>
  );
};
