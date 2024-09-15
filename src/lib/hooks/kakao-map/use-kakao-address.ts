import { useCallback, useEffect, useRef, useState } from "react";
import { GeoLocation } from "../use-geo-location";
import { useKakaoLoader } from "./use-kakao-loader";

export const useKakaoAddress = () => {
  const [isKakaoLoading] = useKakaoLoader();
  const geocoder = useRef<kakao.maps.services.Geocoder>();
  const [address, setAddress] = useState<string>("");

 
  
  useEffect(() => {
    if (isKakaoLoading) return;
    geocoder.current = new kakao.maps.services.Geocoder();
  }, [isKakaoLoading]);

  const searchDetailAddrFromCoords = useCallback(
    (location: GeoLocation, callback: (result: any, status: any) => void) => {
      geocoder.current?.coord2Address(location.lng, location.lat, callback);
    },
    [geocoder],
  );

  const searchAddr = useCallback(
    (markerPosition: GeoLocation | undefined) => {
      if (!markerPosition) {
        setAddress("");
        return;
      }
      searchDetailAddrFromCoords(markerPosition, (result, status) => {
        if (status === "OK") {
          setAddress(result[0].address.address_name ?? "");
        }
      });
    },
    [geocoder, searchDetailAddrFromCoords],
  );

  console.log("address", address);

  return { isKakaoLoading, address, searchAddr };
};
