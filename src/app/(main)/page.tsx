"use client";

import { useTestStore } from "@/stores/test-store";
import NewUserControl from "../new-user-control";
import { useEffect, useState } from "react";
import * as UserCookie from "@/server/cookies/user-cookie";
import { User } from "@/models/user";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";

export default function Home() {
  const { user } = useServerCookie();
  const { setName } = useTestStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-44 w-44 bg-slate-100 p-2">
        <button onClick={() => setName("임지훈")}>클릭</button>
        <div className="text-xl">{JSON.stringify(user)}</div>
        <NewUserControl />
      </div>
      {/* <RadioGroup onChange={console.log} defaultValue={2}>
        <BtnRadio value={1} text="123" />
        <BtnRadio value={2} />
        <BtnRadio value={"aa"} />
      </RadioGroup> */}
    </main>
  );
}
