/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../src/components/atoms/Button";
import { Front } from "../src/components/templates/Front";
import { useStore } from "../src/store";

export default function Home(props) {
  const router = useRouter();
  let cartData = props.cartData;
  const carts = useStore((state) => state.carts);
  const setCarts = useStore((state) => state.setCarts);
  const allocateCarts = useStore((state) => state.allocateCarts);
  const pushCartstoApi = useStore((state) => state.pushCartsToApi);
  const confirmOrder = () => {
    router.push("/confirmation");
    pushCartstoApi();
  };

  useEffect(() => {
    if (carts.length == 0) {
      setCarts(cartData);
      allocateCarts();
    }
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
  // const res = await fetch("https://fakestoreapi.com/carts?limit=5");
  // const cartData = await res.json();

  const data =
    '[{"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0}]';
  const jsonData = JSON.parse(data);

  return {
    props: {
      cartData: jsonData,
    },
  };
}
