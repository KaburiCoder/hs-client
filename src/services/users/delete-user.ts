import { axClient } from "@/lib/api/ax-client";
import { User } from "@/models/user";
import { apiPaths } from "@/shared/paths";

interface DeleteUserDto {
  id: string;
}

export async function deleteUser({ id }: DeleteUserDto): Promise<User> {
  const response = await axClient.delete(apiPaths.users.delete(id));

  return response.data as User;
}