import { SaveDialog } from "@/components/SaveDialog";
import { GeoLocation, useGeoLocation } from "@/lib/hooks/use-geo-location";
import { useGeoSearch } from "@/lib/hooks/use-geo-search";
import { useKakaoLoader } from "@/lib/hooks/use-kakao-loader";
import { ModalProps } from "@/lib/props/modal-props";
import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/react";
import { MapPin } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface Props extends ModalProps {}

export const RegistMapDialog = ({ isOpen, onOpenChange }: Props) => {
  useKakaoLoader();

  const { location } = useGeoLocation();
  const [markerPosition, setMarkerPosition] = useState<GeoLocation>();
  const [selectedPosition, setSelectedPosition] = useState<GeoLocation>();
  const { search, setSearch, markers } = useGeoSearch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {}

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const rect = searchWrapperRef.current?.getBoundingClientRect();

  const [isSearching, setIsSearching] = useState(false);
  const searchInputFocused = useRef(false);
  const searchResultFocused = useRef(false);
  const [address, setAddress] = useState<string>("");
  const mapRef = useRef<any>(null);
  useEffect(() => {
    if (markerPosition) {
      searchDetailAddrFromCoords(markerPosition, (result, status) => {
        if (status === "OK") {
          setAddress(result[0].address.address_name ?? "");
        }
      });
    }
  }, [markerPosition]);
  return (
    <SaveDialog
      className="min-w-[30rem]"
      title="지도 설정"
      isOpen={isOpen}
      isDisabled={true}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
    >
      <div ref={searchWrapperRef}>
        <Input
          autoComplete="off"
          ref={searchInputRef}
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => {
            searchInputFocused.current = true;
            setIsSearching(true);
          }} // 포커스 중인 경우 isSearching을 true로 설정
          onBlur={() => {
            searchInputFocused.current = false;
            setTimeout(() => {
              if (!searchResultFocused.current && !searchInputFocused.current) {
                setIsSearching(false);
              }
            }, 100);
          }}
        />
      </div>
      {isSearching && (
        <div
          tabIndex={1}
          className="fixed z-50 overflow-auto rounded-md border border-gray-300 bg-white p-2"
          style={{
            width: `${rect?.width}px`,
            minHeight: "3rem",
            maxHeight: "20rem",
            top: (rect?.top ?? 0) + (rect?.height ?? 0) + 2,
          }}
          onFocus={() => {
            searchResultFocused.current = true;
            setIsSearching(true);
          }}
          onBlur={() => {
            searchResultFocused.current = false;
            setTimeout(() => {
              if (!searchResultFocused.current && !searchInputFocused.current) {
                setIsSearching(false);
              }
            }, 100);
          }}
        >
          <ul className="flex flex-col gap-2">
            {markers.length === 0 && <li>검색 할 주소를 입력하세요.</li>}
            {markers.length > 0 &&
              markers.map((marker) => (
                <li
                  key={marker.position.lat + marker.position.lng}
                  className="cursor-pointer rounded-md p-2 hover:bg-gray-100"
                  onClick={() => {
                    const position = {
                      lat: Number(marker.position.lat),
                      lng: Number(marker.position.lng),
                    };
                    setSelectedPosition(position);
                    setMarkerPosition(position);
                    setIsSearching(false);
                  }}
                >
                  {marker.content}
                </li>
              ))}
          </ul>
        </div>
      )}
      <Map
        onMouseMove={(e) => {
          (document.activeElement as HTMLElement).blur();
          const searchInput = document.getElementById("search");
          searchInput?.blur();
          if (searchInputRef.current) {
            searchInputRef.current.blur();
          }
        }}
        onClick={(_, mouseEvent) => {
          mapRef.current?.focus();
          const latlng = mouseEvent.latLng;
          if (searchInputRef.current) {
            searchInputRef.current.blur();
          }
          setMarkerPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
        center={selectedPosition ?? { ...location }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={markerPosition ?? { ...location }} />
      </Map>
      <div
        ref={mapRef}
        tabIndex={-1}
        className={cn(
          "flex items-center gap-2 text-sm text-gray-500 outline-none",
          address ? "" : "hidden",
        )}
      >
        <MapPin />
        {address}
      </div>
    </SaveDialog>
  );
};

function searchDetailAddrFromCoords(
  location: GeoLocation,
  callback: (result: any, status: any) => void,
) {
  var geocoder = new kakao.maps.services.Geocoder();
  // 좌표로 법정동 상세 주소 정보를 요청합니다
  geocoder.coord2Address(location.lng, location.lat, callback);
}
