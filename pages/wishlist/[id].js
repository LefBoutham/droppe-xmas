import { useRouter } from "next/router";
import { useEffect } from "react";
import { WishlistView } from "../../src/components/templates/WishlistView";
import { useStore } from "../../src/store";

export default function WishlistPage() {
  const router = useRouter();
  const { id } = router.query;

  const carts = useStore((state) => state.carts);

  useEffect(() => {
    if (!id) {
      return;
    }
    if (carts.length == 0) {
      router.push("/");
    }
  }, [carts, id]);
  return (
    <>
      <WishlistView id={id} />
    </>
  );
}
