"use client";
import { EnvData } from "@/contants/env-data";
import { SocketIOProvider as KbrSocketIOProvider } from "kbr-nextjs-shared";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { usePathname } from "next/navigation";

export const SocketIOProvider = ({ children }: ChildrenProps) => {
  const pathname = usePathname();
  const namespace = getSocketNamespace(pathname);

  return (
    <KbrSocketIOProvider uri={`${EnvData.SOCKET_URL}${namespace}`}>
      {children}
    </KbrSocketIOProvider>
  );
};

function getSocketNamespace(pathname: string) {
  if (pathname.startsWith("/clickdesk")) return "/click-desk";
  return "/hs";
}
