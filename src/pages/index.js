import React from "react";
import Layout from "../components/layout";
import Hero from "../components/pages/index/Hero";
import MobileHomeReview from "../components/pages/index/MobileHomeReview";
import MeetAuthor from "../components/pages/index/MeetAuthor";
import SEO from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <SEO
        title={`Aiden Kinder: Journey Advenia`}
        description={
          "Official website of Aiden Kinder, author of Journey Advenia."
        }
      />
      <Hero />
      <MobileHomeReview />
      <MeetAuthor />
    </Layout>
  );
}
