"use client";
import { useGeoLocation } from "@/lib/hooks/use-geo-location";
import React, { useCallback, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useGeoSearch } from "../../lib/hooks/use-geo-search";

export default function TestPage() {
  const { location } = useGeoLocation();
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>();
  const { search, setSearch, markers } = useGeoSearch();

 
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Map
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
        center={position ?? { ...location }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker onCreate={(e) => {}} position={position ?? { ...location }}>
          <div style={{ minWidth: "150px" }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
            />
            <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
          </div>
        </MapMarker>
      </Map>
      <ul>
        {markers.map((marker) => (
          <li
            key={marker.position.lat + marker.position.lng}
            onClick={() => {
              setPosition({
                lat: Number(marker.position.lat),
                lng: Number(marker.position.lng),
              });
            }}
          >
            {marker.content}
          </li>
        ))}
      </ul>
      <div id="clickLatlng">
        {position &&
          `클릭한 위치의 위도는 ${position.lat} 이고, 경도는 ${position.lng} 입니다`}
      </div>
      {/* <div>{JSON.stringify(data)}</div>
      <div>---------------</div>
      <div>BASE_URL: {EnvData.CLIENT_URL}</div>
      <div>NEXT_ENV: {process.env.NEXT_ENV}</div>
      <div>NEXT_PUBLIC_SERVER_URL: {process.env.NEXT_PUBLIC_SERVER_URL}</div>
      <div>ADMIN_KEY: {process.env.ADMIN_KEY}</div>
      <Test2 /> */}
    </div>
  );
}


