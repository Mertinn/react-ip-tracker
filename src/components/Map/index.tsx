import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { StyledMapContainer } from "./styles";
import MarkerIconSVG from "../../assets/icon-location.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MarkerIcon = L.icon({
  iconUrl: MarkerIconSVG,
  iconSize: [35, 42],
});

const Map = () => {
  return (
    <StyledMapContainer>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%" }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} icon={MarkerIcon} />
      </MapContainer>
    </StyledMapContainer>
  );
};

export default Map;
