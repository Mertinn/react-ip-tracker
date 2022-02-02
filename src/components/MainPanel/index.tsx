import React from "react";
import { ContentContainer, Header, MainPanelContainer } from "./styles";
import SearchInput from "../SearchInput";
import DataCard from "../DataCard";

const MainPanel = () => {
  const headers = [
    { title: "IP Address", text: "No data" },
    { title: "Location", text: "No data" },
    { title: "Timezone", text: "No data" },
    { title: "ISP", text: "No data" },
  ];

  return (
    <MainPanelContainer>
      <ContentContainer>
        <Header>IP Address Tracker</Header>
        <SearchInput />
        <DataCard headers={headers} />
      </ContentContainer>
    </MainPanelContainer>
  );
};

export default MainPanel;
