import { paths } from "@/paths"
import { axClient } from "./ax-client";

export async function saveLockPw(lockPw: string) {
  await axClient.post(paths.settings('lockpw'), {
    lockPw
  })
}

export async function getLockPw(): Promise<{ lockPw: string }> {
  const res = await axClient.get(paths.settings('lockpw'))
  return res.data;
}