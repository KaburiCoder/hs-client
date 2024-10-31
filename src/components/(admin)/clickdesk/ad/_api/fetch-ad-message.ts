import { axClient } from "@/lib/api/ax-client";
import { AdMessage } from "../types/ad-message";
import { apiPaths } from "@/shared";

export const fetchAdMessage = async (): Promise<AdMessage> => {
  const { data } = await axClient.get<AdMessage>(`${apiPaths.commonSettings.adMessage}`);
  return data;
};
