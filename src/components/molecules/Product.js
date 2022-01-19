import React from "react";
import { useStore } from "../../store";
import { Button } from "../atoms/Button";
import { ItemContainer } from "../atoms/ItemContainer";
import { usePageId } from "../hooks/usePageId";

export const Product = ({ gift }) => {
  const approveGift = useStore((state) => state.approveGift);
  const discardGift = useStore((state) => state.discardGift);

  const id = usePageId();

  return (
    <ItemContainer className="product-to-approve">
      <h2 style={{ margin: "0" }}>Gift {gift.productId}</h2>
      <p>Price: {gift.price.toFixed(2)}€</p>
      <div className="approval-buttons">
        <Button
          onClick={() => {
            approveGift(gift.productId, id);
          }}
        >
          Approve
        </Button>
        <Button
          onClick={() => {
            discardGift(gift.productId, id);
          }}
        >
          Discard
        </Button>
      </div>
    </ItemContainer>
  );
};
