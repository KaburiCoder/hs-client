import { axClient } from "@/lib/api/ax-client";
import { User } from "@/models/user";
import { apiPaths } from "@/paths";

export async function getUserById(id: string): Promise<User> {
  const response = await axClient.get(apiPaths.users.id(id));

  return response.data as User;
}