import { axWebApp } from "@/lib/api/ax-web-app";
import { WebAppUser } from "@/models/web-app-user";
import { apiPaths } from "@/paths";

export async function getUsersByHsUserId({ hsUserId }: { hsUserId: string }): Promise<WebAppUser[]> {
   const response = await axWebApp.get(apiPaths.webApp.hsUserId(hsUserId));
  return response.data?.users as WebAppUser[];
}
