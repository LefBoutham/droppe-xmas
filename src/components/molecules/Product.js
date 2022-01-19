import React from "react";
import { Button } from "../atoms/Button";
import { ItemContainer } from "../atoms/ItemContainer";

export const Product = ({ gift }) => {
  const approveGift = () => {
    console.log("Approved");
  };

  return (
    <ItemContainer className="product-to-approve">
      <h2>Gift {gift.productId}</h2>
      <p>Gift quantity: {gift.quantity}</p>
      <Button
        onClick={() => {
          approveGift();
        }}
      >
        Approve
      </Button>
      <Button>Discard</Button>
    </ItemContainer>
  );
};
