import { useEnv } from "@/providers";
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export function useKakaoLoader() {
  const { KAKAO_JS_KEY } = useEnv();

  return useKakaoLoaderOrigin({
    appkey: KAKAO_JS_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
}
