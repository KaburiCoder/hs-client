import { axClient } from "@/lib/api/ax-client";
import { WebAppSettingsReadingDto } from "../dto";
import { apiPaths } from "@/shared";

export const fetchWebAppSettingsReading = async (hsId: string): Promise<WebAppSettingsReadingDto> => {
  const res = await axClient.get(apiPaths.webApp.settingsReading(hsId));
  return res.data;
};

