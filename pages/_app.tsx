import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import Layout from "../components/layout";
import Metatags from "../components/metatags";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeComplete", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <Metatags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
