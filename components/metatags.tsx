import Head from "next/head";

const Metatags = () => (
  <Head>
    <title>Kevin Jerome&apos;s Portfolio</title>
    <meta name="title" content="Kevin Jerome" />
    <meta
      name="description"
      content="Software developer with a focus on full-stack web technologies."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.kevinjero.me/" />
    <meta property="og:title" content="Kevin Jerome" />
    <meta
      property="og:description"
      content="Software developer with a focus on full-stack web technologies."
    />
    <meta property="og:image" content="/meta-logo.jpg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.kevinjero.me/" />
    <meta property="twitter:title" content="Kevin Jerome" />
    <meta
      property="twitter:description"
      content="Software developer with a focus on full-stack web technologies."
    />
    <meta property="twitter:image" content="/meta-logo.jpg" />
  </Head>
);

export default Metatags;
