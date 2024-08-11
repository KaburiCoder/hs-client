import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";

export async function deleteAdFile({ id }: { id: string }) {
  const response = await axClient.delete(apiPaths.adFile.id(id));
  return response.data;
}
