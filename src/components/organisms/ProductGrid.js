import React from "react";
import { useStore } from "../../store";
import { Product } from "../molecules/Product";

export const ProductGrid = ({ id }) => {
  const gifts = useStore((state) => state.children[id - 1].wishlist);
  return (
    <div className="product-grid">
      {gifts.map((gift) => {
        return <Product key={gift.productId} gift={gift} />;
      })}
    </div>
  );
};
