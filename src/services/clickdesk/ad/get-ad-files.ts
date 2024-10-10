import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/shared/paths";

export async function getAdFiles() {
  const response = await axClient.get(apiPaths.adFile.root);
  return response.data;
}