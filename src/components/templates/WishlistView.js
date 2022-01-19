/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useStore } from "../../store";
import { usePageId } from "../hooks/usePageId";
import { ProductGrid } from "../organisms/ProductGrid";

export const WishlistView = () => {
  const id = usePageId();
  const child = useStore((state) => state.children[id - 1]);
  const wishlist = useStore((state) => state.children[id - 1].wishlist);

  return (
    <section>
      <Link href="/">⬅️ Back to wishlists</Link>
      <h2>{child.name}'s wishlist:</h2>
      {wishlist.length == 0 ? (
        <p>No gifts to approve!</p>
      ) : (
        <ProductGrid gifts={wishlist} />
      )}
    </section>
  );
};
