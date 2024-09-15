import { GeoLocation } from "@/lib/hooks/use-geo-location";
import { useGeoSearch } from "@/lib/hooks/use-geo-search";
import { Input } from "@nextui-org/react";
import React, { useRef, useState } from "react";

interface Props {
  onSelect: (position: GeoLocation) => void;
}

export const AddrSearchInput = ({ onSelect }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  // 포커스 상태
  const searchInputFocused = useRef(false);
  const searchResultFocused = useRef(false);
  // 검색 상태
  const [isSearching, setIsSearching] = useState(false);
  const rect = searchWrapperRef.current?.getBoundingClientRect();
  const { search, setSearch, markers } = useGeoSearch();

  return (
    <>
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
                    const position: GeoLocation = {
                      lat: Number(marker.position.lat),
                      lng: Number(marker.position.lng),
                    };
                    onSelect(position);
                    setIsSearching(false);
                  }}
                >
                  {marker.content}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
