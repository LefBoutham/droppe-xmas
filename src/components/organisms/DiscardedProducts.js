import React from "react";
import { useStore } from "../../store";
import { ProductSimple } from "../molecules/ProductSimple";

export const DiscardedProducts = (props) => {
  const discarded = useStore((state) => state.allDiscarded);
  return (
    <div className="product-grid">
      {discarded.map((gift) => {
        return <ProductSimple key={gift.productId} gift={gift} />;
      })}
    </div>
  );
};
