import { useRouter } from "next/router";
import { useEffect } from "react";
import { WishlistView } from "../../src/components/templates/WishlistView";
import { useStore } from "../../src/store";

export default function WishlistPage() {
  return (
    <>
      <WishlistView />
    </>
  );
}
