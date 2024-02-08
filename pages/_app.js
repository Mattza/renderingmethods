import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";

import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Anton from "../components/Anton";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  anton: Anton,
};

storyblokInit({
  accessToken: "m0Hk6LurfD6QulyYHLQgjAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <style>{`body { display: block !important }`}</style>
    </>
  );
}

export default MyApp;
