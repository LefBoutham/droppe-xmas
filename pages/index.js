import { useEffect } from "react";
import { Front } from "../src/components/templates/Front";
import { useStore } from "../src/store";

export default function Home(props) {
  let cartData = props.cartData;
  const setCarts = useStore((state) => state.setCarts);
  const allocateCarts = useStore((state) => state.allocateCarts);

  useEffect(() => {
    setCarts(cartData);
    allocateCarts();
  }, []);

  return (
    <Front>
      <p>Start approving gifts by clicking on a wishlist below!</p>
    </Front>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://fakestoreapi.com/carts?limit=5");
  const cartData = await res.json();

  return {
    props: {
      cartData: cartData,
    },
  };
}
