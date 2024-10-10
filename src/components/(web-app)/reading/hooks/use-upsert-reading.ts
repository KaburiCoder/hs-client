import { useServerCookie } from '@/lib/hooks/use-server-cookie';
import { useMutation } from '@tanstack/react-query';
import { upsertWebAppSettingsReading } from '../api';
import { toast } from 'react-hot-toast';

export * from './use-fetch-reading';

export const useUpsertReading = () => {
  const { user } = useServerCookie();
  const { mutate, isPending } = useMutation({
    mutationFn: upsertWebAppSettingsReading,
    onSuccess: () => {
      toast.success("설정이 저장되었습니다.");
    },
    onError: (error) => {
      toast.error("설정 저장에 실패했습니다.\n" + error);
    },
  });

  function upsert(commonDays: number, gumsaDays: number) {
    mutate({ hsId: user?.id ?? "", data: { commonDays, gumsaDays } });
  }

  return { user, isPending, upsert };
}
