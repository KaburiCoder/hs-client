import { EnvData } from "@/contants/env-data";
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";
import { unstable_noStore as noStore } from "next/cache";
export function useKakaoLoader() {
  noStore();
  return useKakaoLoaderOrigin({
    appkey: EnvData.KAKAO_JS_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
}
