import { axClient } from "@/lib/api/ax-client";
import { WebAppUser } from "@/models/web-app-user";
import { apiPaths } from "@/shared/paths";

export async function getWebAppUsers({ hsUserId }: { hsUserId: string }): Promise<WebAppUser[]> {
  const response = await axClient.get(apiPaths.webAppUsers.hsUserId(hsUserId));
  return response.data?.users as WebAppUser[];
}
