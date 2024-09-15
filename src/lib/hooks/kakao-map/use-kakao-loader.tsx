import { EnvData } from "@/contants/env-data";
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export function useKakaoLoader() {
  return useKakaoLoaderOrigin({
    appkey: EnvData.KAKAO_JS_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
}
