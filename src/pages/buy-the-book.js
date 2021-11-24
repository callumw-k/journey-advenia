import React from "react";
import Layout from "../components/layout";
import Hero from "../components/pages/purchase-page/Hero";
import SEO from "../components/seo";

export default function BuyTheBook() {
  return (
    <Layout>
      <SEO
        title={"Buy Journey Advenia"}
        description={"Purchase page for Journey Advenia."}
      />
      <Hero />
    </Layout>
  );
}
