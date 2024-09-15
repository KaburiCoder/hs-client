import { GeoLocation } from "@/lib/hooks/use-geo-location";


export interface GeoLocationProps {
  location: GeoLocation | undefined;
  onLocationSelected: (location: GeoLocation) => void;
}
