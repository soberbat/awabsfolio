"use client";
import React from "react";
import * as S from "./Home.styles";
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
        break;
    }
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Name>Awab ALSAATI</S.Name>
        <S.TabContainer>
          {tabs.map((tab) => (
            <S.Tab onClick={() => handleTabClick(tab)} key={tab}>
              {tab}
            </S.Tab>
          ))}
        </S.TabContainer>
        <S.Background className="classname" />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Home;
