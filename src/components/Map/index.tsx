import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { StyledMapContainer } from "./styles";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <StyledMapContainer>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </StyledMapContainer>
  );
};

export default Map;
