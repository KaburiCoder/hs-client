import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";
import { DeskSettings } from "../_types/desk-settings";

export async function saveDeskFeature(settings: DeskSettings) : Promise<DeskSettings> {
  const response = await axClient.put(apiPaths.clickdesk.settingsFeature, settings);
  return response.data;
}