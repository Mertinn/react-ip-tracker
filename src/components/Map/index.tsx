import React, { useMemo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { StyledMapContainer } from "./styles";
import MarkerIconSVG from "../../assets/icon-location.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "../../contexts/map";

const MarkerIcon = L.icon({
  iconUrl: MarkerIconSVG,
  iconSize: [35, 42],
});

const Map = () => {
  const { setMap, markers } = useMap();

  return (
    <StyledMapContainer>
      <MapContainer
        center={[10, 10]}
        zoom={1}
        style={{ height: "100%" }}
        zoomControl={false}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker position={marker.position} icon={MarkerIcon} key={index} />
        ))}
      </MapContainer>
    </StyledMapContainer>
  );
};

export default Map;
