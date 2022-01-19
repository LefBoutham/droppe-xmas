import React from "react";
import { ItemContainer } from "../atoms/ItemContainer";

export const ProductSimple = ({ gift }) => {
  const newPrice = gift.price * gift.quantity * (1 - gift.quantity / 10);
  return (
    <ItemContainer className="product-simple">
      <h2>Gift {gift.productId}</h2>
      <p>Quantity: {gift.quantity}</p>
      <p>Single price: {gift.price.toFixed(2)}€</p>
      {gift.quantity != 1 ? (
        <p>Price after discount: {newPrice.toFixed(2)}€</p>
      ) : (
        ""
      )}
    </ItemContainer>
  );
};
