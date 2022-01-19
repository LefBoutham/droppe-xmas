import React from "react";
import { Button } from "../atoms/Button";
import { ItemContainer } from "../atoms/ItemContainer";

export const Product = (props) => {
  return (
    <ItemContainer className="product-to-approve">
      <p>Gift name: Gift</p>
      <p>Gift quantity: 1</p>
      <Button>Approve</Button>
      <Button>Discard</Button>
    </ItemContainer>
  );
};
