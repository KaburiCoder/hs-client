import { axClient } from "@/lib/api/ax-client";
import { paths } from "@/paths";

export async function signup({
  userId,
  password,
  roomKey,
  accountKey,
}: {
  userId: string;
  password: string;
  roomKey: string;
  accountKey: string;
}) {
  return await axClient.post(paths.signup, {
    userId,
    password,
    roomKey,
    accountKey,
  });
}
