import React from "react";
import { ItemContainer } from "../atoms/ItemContainer";

export const ProductSimple = (props) => {
  return (
    <ItemContainer className="product-simple">
      <p>Gift name: Gift</p>
      <p>Gift quantity: 1</p>
    </ItemContainer>
  );
};
