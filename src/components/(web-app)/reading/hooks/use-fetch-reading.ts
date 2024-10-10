import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { useQuery } from "@tanstack/react-query";
import { fetchWebAppSettingsReading } from "@/components/(web-app)/reading/api";
import { apiPaths } from "@/shared";
import { useEffect, useState } from "react";

export const useFetchReading = () => {
  const { user } = useServerCookie();
  const [resetToggle, setResetToggle] = useState(false);
  const { data: reading, refetch, isPending } = useQuery({
    queryKey: [apiPaths.webApp.settingsReading(user?.id ?? ""), user?.id],
    queryFn: () => fetchWebAppSettingsReading(user?.id ?? ""),
    enabled: !!user?.id,
  });
  const [commonDays, setCommonDays] = useState<string>();
  const [gumsaDays, setGumsaDays] = useState<string>();

  useEffect(() => {
    setCommonDays(reading?.commonDays?.toString());
    setGumsaDays(reading?.gumsaDays?.toString());
  }, [reading, resetToggle]);

  function reset() {
    refetch().then(() => setResetToggle((prev) => !prev));
    // setResetToggle((prev) => !prev);
  }

  return { commonDays, gumsaDays, isPending, setCommonDays, setGumsaDays, reset };
}