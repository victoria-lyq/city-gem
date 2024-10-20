import React, { useMemo, useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { Category, Location } from "./type";
import Pin from "./pin";
import "../styles/MapComponents.css";

interface MapComponentProps {
  viewState: any;
  setViewState: (viewState: any) => void;
  locations: any[];
  mapboxToken: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  viewState,
  setViewState,
  locations,
  mapboxToken,
}) => {
  const [popupInfo, setPopupInfo] = useState<Location | null>(null);
  console.log("locations", locations);
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "food":
        return "#e665bf";
      case "fun":
        return "#033dfc";
      case "shop":
        return "#b08c0b";
      case "nightlife":
        return "#fc0307";
      default:
        return "#000000"; // Default color if category is not recognized
    }
  };
  const pins = locations.map((location, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={location.longitude}
      latitude={location.latitude}
      anchor="bottom"
      onClick={(e) => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(location);
      }}
    >
      <Pin color={getCategoryColor(location.category)} />
    </Marker>
  ));

  return (
    <Map
      {...viewState}
      mapboxAccessToken={mapboxToken}
      //   className="map"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onMove={(evt) => setViewState(evt.viewState)}
      width="100%"
      height="100%"
      attributionControl={false}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
        >
          <div>{popupInfo.name || "Unnamed Location"}</div>
          <div>{popupInfo.address}</div>
          <div>{popupInfo.description}</div>
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;
