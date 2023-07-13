import ContentCard from "@live-component/ContentCard";
import FormCard from "@live-component/FormCard";
import Layout from "@live-component/Layout";
import CONST from "@live-util/constant";
import React from "react";

const HomePage = async () => {
  const { data } = await getData();
  return (
    <Layout>
      <FormCard />
      <ContentCard data={data} />
    </Layout>
  );
};

export default HomePage;
async function getData() {
  try {
    const res = await fetch(
      `https://works-project.hasura.app/api/rest/content`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": `0SwWGQ0TgVvMh2qJRz940Z5QePsofSfk1TJjLT1sX0I5pk71WO8O5Sdn0ANlgSvk`,
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
