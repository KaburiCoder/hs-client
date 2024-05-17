import { useSocketIO } from "kbr-nextjs-shared/hooks";
import { EvPaths } from "../ev-paths";
import { useState } from "react";

interface Args<TResult> {
  ev: EvPaths;
  onSuccess?: (value: TResult) => void;
}

export const useEmit = <TArgs, TResult>({ ev, onSuccess }: Args<TResult>) => {
  const { socket, isConnected } = useSocketIO();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TResult>();

  async function emitAck(args: TArgs) {
    if (!isConnected) return;

    setIsLoading(true);
    const result = (await socket?.emitWithAck(ev, args)) as TResult;
    setData(result);
    onSuccess?.(result);
    setIsLoading(false);
  }

  return { data, isConnected, isLoading, emitAck };
};
