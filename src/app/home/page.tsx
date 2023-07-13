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
    const res = await fetch(`${CONST.BASE_URL}/content`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": `${CONST.BASE_KEY}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
