import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";
import { DeskSettings } from "../_types/desk-settings";

export async function fetchDeskSettings(): Promise<DeskSettings> {
  const response = await axClient.get(apiPaths.clickdesk.settings);
  return response.data;
}