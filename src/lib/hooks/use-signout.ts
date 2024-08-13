import { useRouter } from "next/navigation";
import { signout } from "../../services/sign/signout";
import { paths } from "@/paths";
import { useSocketIO } from "kbr-nextjs-shared/hooks";

export const useSignout = () => {
  const { replace } = useRouter();
  const { socket } = useSocketIO();

  function handleSignout(): void {
    socket?.disconnect();
    signout().then(() => replace(paths.login));
  }

  return { handleSignout }
}