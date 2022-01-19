import React from "react";
import { useStore } from "../../store";
import { ProductSimple } from "../molecules/ProductSimple";

export const ApprovedProducts = (props) => {
  const approved = useStore((state) => state.allApproved);
  return (
    <div className="product-grid">
      {approved.map((gift) => {
        return <ProductSimple key={gift.productId} gift={gift} />;
      })}
    </div>
  );
};
