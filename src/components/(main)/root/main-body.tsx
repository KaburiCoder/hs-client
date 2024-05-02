"use client";
import React from "react";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { EvPaths } from "@/socket-io/ev-paths";
import { useEmit } from "@/socket-io/hooks/use-emit";
import {
  GetReceptionPatientsArgs,
  GetReceptionPatientsResult,
} from "health-screening-shared/interfaces.socket";
import { Button, Divider, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { PatientCard } from "./patient-card";
import { RefreshCw, Search } from "lucide-react";
export default function MainBody() {
  const { user } = useServerCookie();
  const { data, isConnected, emitAck } = useEmit<
    GetReceptionPatientsArgs,
    GetReceptionPatientsResult
  >({
    ev: EvPaths.GetReceptionPatients,
  });

  useEffect(() => {
    if (!isConnected || !user?.roomKey) return;

    emitAck({ key: user.roomKey });
  }, [isConnected, user]);

  function handleReload(): void {
    if (user) emitAck({ key: user.roomKey });
  }

  const cards = data?.data?.map((d) => <PatientCard key={d.eiAuto} data={d} />);

  return (
    <main className="mx-auto flex max-w-screen-lg flex-col justify-between space-y-4 px-6 py-6">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="mb-2 mt-4 text-2xl font-bold">
            검진 접수 환자 리스트
          </h2>
          <div className="flex gap-2">
            <Input startContent={<Search/>} className="text-base" placeholder="이름 검색" />
            <Button
              variant="bordered"
              startContent={<RefreshCw />}
              onClick={handleReload}
            ></Button>
          </div>
        </div>
        <Divider className="my-2" />
      </div>
      {cards}
    </main>
  );
}
