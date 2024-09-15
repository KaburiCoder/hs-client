import { SaveDialog } from "@/components/SaveDialog";
import { GeoLocation, useGeoLocation } from "@/lib/hooks/use-geo-location";
import { ModalProps } from "@/lib/props/modal-props";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { GeoLocationProps } from "../../types";
import { AddrName } from "./AddrName";
import { AddrSearchInput } from "./AddrSearchInput";
import { useKakaoAddress } from "@/lib/hooks/kakao-map";

interface Props extends ModalProps, GeoLocationProps {}

export const RegistMapDialog = ({
  isOpen,
  onClose,
  onOpenChange,
  onLocationSelected,
  location: savedLocation,
}: Props) => {
  const addrNameRef = useRef<HTMLDivElement>(null);

  const {
    location,
    markerPosition,
    selectedPosition,
    setMarkerPosition,
    setSelectedPosition,
  } = useLocations(savedLocation);
  const { isKakaoLoading, address, searchAddr } = useKakaoAddress();

  // 주소 불러오기 (ex.전주시 덕진구...)
  useEffect(() => {
    if (isKakaoLoading) return;
    searchAddr(markerPosition);
  }, [markerPosition, searchAddr, isKakaoLoading]);

  // 지도, 마커 위치 설정
  useEffect(() => {
    setSelectedPosition(location);
    setMarkerPosition(location);
  }, [location]);

  return (
    <SaveDialog
      className="min-w-[30rem]"
      title="지도 설정"
      saveButtonText="적용"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttonType="button"
      onClick={() => {
        onLocationSelected(markerPosition);
        onClose?.();
      }}
    >
      <AddrSearchInput
        onSelect={(position) => {
          setSelectedPosition(position);
          setMarkerPosition(position);
        }}
      />
      <Map
        onClick={(_, mouseEvent) => {
          addrNameRef.current?.focus();
          const latlng = mouseEvent.latLng;
          setMarkerPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
        center={selectedPosition}
        className="rounded-md border border-gray-200"
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={markerPosition} />
      </Map>
      <AddrName ref={addrNameRef} address={address} />
    </SaveDialog>
  );
};

const useLocations = (savedLocation: GeoLocation | undefined) => {
  const { location: geoLocation } = useGeoLocation();
  const location = useMemo(
    () => savedLocation ?? geoLocation,
    [geoLocation, savedLocation],
  );
  const [markerPosition, setMarkerPosition] = useState<GeoLocation>(location);
  const [selectedPosition, setSelectedPosition] =
    useState<GeoLocation>(location);

  return {
    location,
    markerPosition,
    selectedPosition,
    setMarkerPosition,
    setSelectedPosition,
  };
};
