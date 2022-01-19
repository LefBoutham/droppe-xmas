import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../src/components/atoms/Button";
import { Front } from "../src/components/templates/Front";
import { useStore } from "../src/store";

export default function Home(props) {
  const router = useRouter();
  let cartData = props.cartData;
  const setCarts = useStore((state) => state.setCarts);
  const allocateCarts = useStore((state) => state.allocateCarts);
  const confirmOrder = () => {
    router.push("/confirmation");
  };

  useEffect(() => {
    setCarts(cartData);
    allocateCarts();
  }, []);

  return (
    <Front>
      <p>Start approving gifts by clicking on a wishlist below!</p>
      <p>
        When you're done, confirm your order by clicking{" "}
        <Button
          onClick={() => {
            confirmOrder();
          }}
        >
          Here
        </Button>
      </p>
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
