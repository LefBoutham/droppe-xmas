/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useLayoutEffect } from "react";
import { useStore } from "../../store";
import { usePageId } from "../hooks/usePageId";
import { ProductGrid } from "../organisms/ProductGrid";

export const WishlistView = () => {
  const id = usePageId();
  const child = useStore((state) => state.children[id - 1]);
  let wishlist = child.wishlist;

  return (
    <section>
      <h2>{child.name}'s wishlist:</h2>
      <ProductGrid gifts={wishlist} />
    </section>
  );
};
