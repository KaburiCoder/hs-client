import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";

export async function deleteWebAppUser(id: string) {
  const res = await axClient.delete(apiPaths.webAppUsers.delete(id));
  return res.data;
}
