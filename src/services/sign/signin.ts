import { axClient } from "@/lib/api/ax-client";
import { paths } from "@/shared/paths";

export async function signin({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) {
  return axClient.post(paths.signin, {
    userId,
    password,
  });
}