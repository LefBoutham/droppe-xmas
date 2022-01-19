import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "../../src/store";

export default function WishlistPage() {
  const router = useRouter();
  const { id } = router.query;

  const carts = useStore((state) => state.carts);

  useEffect(() => {
    if (carts.length == 0) {
      router.push("/");
    }
  }, [carts]);
  return (
    <>
      <p>New wishlist page id: {id}</p>
    </>
  );
}
