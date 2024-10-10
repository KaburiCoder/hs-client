import { paths } from "@/shared/paths";
import { axClient } from "../../lib/api/ax-client";


export async function saveLockPw(lockPw: string) {
  await axClient.post(paths.settings('lockpw'), {
    lockPw
  });
}
