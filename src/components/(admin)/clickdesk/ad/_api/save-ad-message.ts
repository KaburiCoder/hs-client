import { axClient } from "@/lib/api/ax-client";
import { AdMessage } from "../types/ad-message";
import { apiPaths } from "@/shared";

export const saveAdMessage = async (adMessage: AdMessage): Promise<void> => {
  await axClient.put(`${apiPaths.commonSettings.adMessage}`, adMessage);
};
