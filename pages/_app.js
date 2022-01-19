import { useEffect } from "react";
import { Layout } from "../src/components/templates/Layout";
import { useStore } from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
