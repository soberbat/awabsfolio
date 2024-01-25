"use client";
import React from "react";
import Home from "../HomePage/Home";
import WorksPage from "../WorksPage/WorksPage";
import Layout from "../Layout/Layout";
import AboutPage from "../AboutPage/AboutPage";
import { TopRow } from "./Page.styles";
import BlogPage from "../BlogPage/BlogPage";

const Page = () => {
  return (
    <Layout>
      <TopRow>
        <AboutPage />
        <Home />
        <WorksPage />
      </TopRow>
      <BlogPage />
    </Layout>
  );
};

export default Page;
