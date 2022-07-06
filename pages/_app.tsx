import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Metatags from "../components/metatags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metatags />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
