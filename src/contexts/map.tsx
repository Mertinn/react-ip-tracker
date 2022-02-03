import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Map, Marker } from "leaflet";

interface IContext {
  map: Map | null;
  setMap: Dispatch<SetStateAction<IContext["map"]>>;
  markers: { position: [number, number] }[];
  setMarkers: Dispatch<SetStateAction<IContext["markers"]>>;
}

const MapContext = createContext(null as unknown as IContext);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<IContext["map"]>(null);
  const [markers, setMarkers] = useState<IContext["markers"]>([]);

  return (
    <MapContext.Provider value={{ map, setMap, markers, setMarkers }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => useContext(MapContext);
