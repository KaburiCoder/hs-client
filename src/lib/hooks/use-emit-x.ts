import { UseEmitArgs, useEmit } from "@/socket-io/hooks/use-emit";
import { useServerCookie } from "./use-server-cookie";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";

export const useEmitX = <TArgs, TResult>({ ev, onSuccess }: UseEmitArgs<TResult>) => {
  const { data, emitAck, isConnected, isLoading } = useEmit<TArgs, TResult>({ ev, onSuccess })
  const { user } = useServerCookie();
  const { patient } = useSelectionPatientStore();

  function emitWithAck(args: TArgs) {
    if (!user?.roomKey || !patient?.eiAuto) return;
    return emitAck({ ...args, key: user?.roomKey, eiAuto: patient?.eiAuto })
  }

  return { data, isConnected, isLoading, emitAck: emitWithAck };
};