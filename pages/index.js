/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../src/components/atoms/Button";
import { Front } from "../src/components/templates/Front";
import { useStore } from "../src/store";

export default function Home(props) {
  const router = useRouter();
  const pushCartstoApi = useStore((state) => state.pushCartsToApi);
  const confirmOrder = () => {
    router.push("/confirmation");
    pushCartstoApi();
  };

  return (
    <Front>
      <h1 style={{ fontSize: "38px" }}>Droppe-Xmas</h1>
      <p style={{ fontSize: "20px", fontWeight: "500" }}>
        Approve or discard gifts by clicking on a wishlist below.
      </p>
      <p style={{ fontSize: "20px", fontWeight: "500" }}>
        When you're finished, confirm your order by clicking{" "}
        <Button
          onClick={() => {
            confirmOrder();
          }}
        >
          Here
        </Button>
      </p>
      <h2>Wishlists:</h2>
    </Front>
  );
}
