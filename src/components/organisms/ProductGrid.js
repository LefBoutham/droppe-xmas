import React, { useLayoutEffect } from "react";
import { useStore } from "../../store";
import { usePageId } from "../hooks/usePageId";
import { Product } from "../molecules/Product";

export const ProductGrid = ({ gifts }) => {
  const id = usePageId();
  const wishlist = useStore((state) => state.children[id - 1].wishlist);
  return (
    <div className="product-grid">
      {wishlist.map((gift) => {
        return <Product key={gift.productId} gift={gift} />;
      })}
    </div>
  );
};
