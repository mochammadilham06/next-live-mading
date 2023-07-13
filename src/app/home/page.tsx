import ContentCard from "@live-component/ContentCard";
import FormCard from "@live-component/FormCard";
import Layout from "@live-component/Layout";
import CONST from "@live-util/constant";
import React from "react";

const HomePage = async () => {
  return (
    <Layout>
      <FormCard />
      <ContentCard />
    </Layout>
  );
};

export default HomePage;
