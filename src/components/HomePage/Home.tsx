"use client";
import React from "react";
import {
  Background,
  Container,
  InnerContainer,
  Name,
  Tab,
  TabContainer,
} from "./Home.styles";
import useStore from "@/store/AppStore";
import { Tabs } from "./types";

const Home = () => {
  const tabs = ["About", "Works", "Blog"];
  const { setIsWorksPageVisible, setIsAboutPageVisible, setIsBlogPageVisible } =
    useStore();

  const handleTabClick = (tabName: string) => {
    switch (tabName) {
      case Tabs.Works:
        setIsWorksPageVisible(true);
        break;
      case Tabs.About:
        setIsAboutPageVisible(true);
        break;
      case Tabs.Blog:
        setIsBlogPageVisible(true);
        console.log(tabName);
        break;
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Name>Awab ALSAATI</Name>
        <TabContainer>
          {tabs.map((tab) => (
            <Tab onClick={() => handleTabClick(tab)} key={tab}>
              {tab}
            </Tab>
          ))}
        </TabContainer>
        <Background className="classname" />
      </InnerContainer>
    </Container>
  );
};

export default Home;
