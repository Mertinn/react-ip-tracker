import React, { useEffect, useState } from "react";
import { ContentContainer, Header, MainPanelContainer } from "./styles";
import SearchInput from "../SearchInput";
import DataCard from "../DataCard";
import axios from "axios";
import { IHeader } from "../DataCard/CardHeader";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { SearchResult } from "leaflet-geosearch/lib/providers/provider";
import { useMap } from "../../contexts/map";

const apiKey = process.env.REACT_APP_API_KEY!;
const ipDataRequestUrl = (ip: string, apiKey: string) =>
  `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`;
const getIpRequestUrl = "https://api.ipify.org?format=json";

interface IPData {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  isp: string;
}

const MainPanel = () => {
  const [headers, setHeaders] = useState<IHeader[]>([
    { title: "IP Address", text: "No data" },
    { title: "Location", text: "No data" },
    { title: "Timezone", text: "No data" },
    { title: "ISP", text: "No data" },
  ]);

  const { map, setMarkers } = useMap();

  useEffect(() => {
    if (!map) return;

    (async () => {
      const ip: { data: { ip: string } } = await axios.get(getIpRequestUrl);
      await handleSearch(ip.data.ip);
    })();
  }, [map, setMarkers]);

  const handleSearch = async (ip: string) => {
    if (!map) return;

    const { data }: { data: IPData } = await axios.get(
      ipDataRequestUrl(ip, apiKey)
    );

    const newHeaders: IHeader[] = [
      { title: "IP Address", text: data.ip },
      {
        title: "Location",
        text: `${data.location.region} ${data.location.country}`,
      },
      { title: "Timezone", text: `UTC ${data.location.timezone}` },
      { title: "ISP", text: data.isp },
    ];
    setHeaders(newHeaders);

    const provider = new OpenStreetMapProvider();
    const results: SearchResult[] = await provider.search({
      query: data.location.region,
    });

    const result = results[0];

    map.setView([result.y, result.x], 5.4);
    setMarkers([{ position: [result.y, result.x] }]);
  };

  return (
    <MainPanelContainer>
      <ContentContainer>
        <Header>IP Address Tracker</Header>
        <SearchInput onSearch={(value) => handleSearch(value)} />
        <DataCard headers={headers} />
      </ContentContainer>
    </MainPanelContainer>
  );
};

export default MainPanel;
