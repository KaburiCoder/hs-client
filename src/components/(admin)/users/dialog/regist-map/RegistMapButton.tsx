"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import { RegistMapDialog } from "..";
import { GeoLocationProps } from "../../types";
import { LabeldItem } from "../UserSettingsDialog";
import { useKakaoAddress } from "@/lib/hooks/kakao-map";
import { ReactNode, useEffect } from "react";
import { MapPinned } from "lucide-react";

interface Props extends GeoLocationProps {
  allowDistanceElement?: ReactNode;
}

export const RegistMapButton = (props: Props) => {
  const disclosure = useDisclosure();
  const { address, searchAddr, isKakaoLoading } = useKakaoAddress();

  useEffect(() => {
    if (isKakaoLoading) return;
    searchAddr(props.location);
  }, [props.location, isKakaoLoading]);

  return (
    <LabeldItem label="위치등록">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded-md border border-slate-300 bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
          onClick={disclosure.onOpen}
        >
          <MapPinned />
        </button>
        {address ? <p className="min-w-40">{address}</p> : <p>위치를 등록해주세요</p>}
        {props.allowDistanceElement}
      </div>
      <RegistMapDialog {...disclosure} {...props} />
    </LabeldItem>
  );
};
