import { axClient } from "@/lib/api/ax-client";
import { WebAppSettingsReadingDto } from "../dto/web-app-settings-reading.dto";

export const upsertWebAppSettingsReading = async ({ hsId, data }: { hsId: string, data: WebAppSettingsReadingDto }) => {
  const res = await axClient.put(`/web-app/settings/${hsId}/reading`, data);
  return res.data;
};
