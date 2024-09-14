"use client";
import { useState, useEffect } from "react";

interface Marker {
  position: {
    lat: string;
    lng: string;
  };
  content: string;
}
export const useGeoSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    if (!search) {
      setMarkers([]);
      return;
    }
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
      }
    });
  }, [search]);

  return { search, setSearch, markers };
};
