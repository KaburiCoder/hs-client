"use client";
import React, { useState } from "react";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { EvPaths } from "@/socket-io/ev-paths";
import { useEmit } from "@/socket-io/hooks/use-emit";
import {
  GetReceptionPatientsArgs,
  GetReceptionPatientsResult,
  ReceptionPatient,
} from "health-screening-shared/interfaces.socket";
import { Button, Divider, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { PatientCard } from "./patient-card";
import { RefreshCw, Search } from "lucide-react";

export default function MainBody() {
  const { user } = useServerCookie();
  const [patients, setPatients] = useState<ReceptionPatient[]>();
  const [searchText, setSearchText] = useState<string>("");
  const { data, isConnected, emitAck } = useEmit<
    GetReceptionPatientsArgs,
    GetReceptionPatientsResult
  >({
    ev: EvPaths.GetReceptionPatients,
  });

  useEffect(() => {
    const patients = data?.data;
    if (!patients) return setPatients(undefined);

    const regex = new RegExp(searchText.trim(), "i");
    const searchedPatients = patients.filter((p) => p.name.match(regex));
    setPatients(searchedPatients);
  }, [data, searchText]);

  useEffect(() => {
    if (!isConnected || !user?.roomKey) return;

    emitAck({ key: user.roomKey });
  }, [isConnected, user]);

  function handleReload(): void {
    if (user) emitAck({ key: user.roomKey });
  }

  const cards = patients?.map((d) => (
    <PatientCard key={`${d.eiAuto},${d.ejAuto}`} data={d} />
  ));

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchText(e.target.value);
  }

  return (
    <>
      <div className="sticky top-0 z-10 bg-white ">
        <div>
          <div className="flex items-center justify-between max-w-screen-lg mx-auto">
            <h2 className="mb-2 mt-4 text-2xl font-bold">
              검진 접수 환자 리스트
            </h2>
            <div className="flex gap-2">
              <Input
                startContent={<Search />}
                className="text-base"
                placeholder="이름 검색"
                onChange={handleSearch}
              />
              <Button
                variant="bordered"
                startContent={<RefreshCw />}
                onClick={handleReload}
              ></Button>
            </div>
          </div>
        </div>
        <Divider className="my-2" />
      </div>
      <main className="mx-auto flex max-w-screen-lg flex-col justify-between space-y-4 px-6 py-6">
        {cards}
      </main>
    </>
  );
}
