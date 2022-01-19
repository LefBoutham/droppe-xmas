import { useEffect, useLayoutEffect } from "react";
import useSWR from "swr";
import { Layout } from "../src/components/templates/Layout";
import { useStore } from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Load data from api with SWR
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://fakestoreapi.com/carts?limit=5",
    fetcher
  );

  // Get cart data setter from state
  const setCarts = useStore((state) => state.setCarts);
  const allocateCarts = useStore((state) => state.allocateCarts);

  // When data is fetched successfully, populate state with data
  useLayoutEffect(() => {
    if (data) {
      setCarts(data);
      allocateCarts();
    }
  }, [data]);

  if (error) return "Error has occured";
  if (!data) return "Loading...";
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
