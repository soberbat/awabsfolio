"use client";
import React from "react";
import Home from "../HomePage/Home";
import WorksPage from "../WorksPage/WorksPage";
import Layout from "../Layout/Layout";
import AboutPage from "../AboutPage/AboutPage";
import { TopRow } from "./Page.styles";
import BlogPage from "../BlogPage/BlogPage";
import usePreloder from "@/hooks/usePreloader";
import LoadingView from "../LoadingView/LoadingView";

const Page = () => {
  const { progress, isPreloaded } = usePreloder();
  return (
    <>
      {!isPreloaded ? (
        <LoadingView progress={progress}></LoadingView>
      ) : (
        <Layout>
          <TopRow>
            <AboutPage />
            <Home />
            <WorksPage />
          </TopRow>
          <BlogPage />
        </Layout>
      )}
    </>
  );
};

export default Page;
