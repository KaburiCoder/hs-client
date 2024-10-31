import { apiPaths } from "@/shared";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchAdMessage } from "../_api/fetch-ad-message";
import { saveAdMessage } from "../_api/save-ad-message";
import { toast } from "react-hot-toast";

export function useAdMessage() {
  const { data: adMessage, isPending: isQueryPending } = useQuery({
    queryFn: fetchAdMessage,
    queryKey: [apiPaths.commonSettings.adMessage],
  });

  const { mutate, isPending: isMutationPending } = useMutation({
    mutationFn: saveAdMessage,
    onSuccess: () => {
      toast.success("저장되었습니다");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [message, setMessage] = useState(adMessage?.message || "");
  const [animationSeconds, setAnimationSeconds] = useState(
    adMessage?.animationSeconds || 5
  );

  useEffect(() => {
    setMessage(adMessage?.message || "");
    setAnimationSeconds(adMessage?.animationSeconds || 5);
  }, [adMessage]);

  return {
    message,
    setMessage,
    animationSeconds,
    setAnimationSeconds,
    mutate,
    isPending: isQueryPending || isMutationPending,
  };
}