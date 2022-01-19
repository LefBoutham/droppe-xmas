import React from "react";
import { useStore } from "../../store";

export const Footer = (props) => {
  const total = useStore((state) => state.totalCost);
  const discount = useStore((state) => state.discount);
  return (
    <footer>
      <p>Total cost: {total.toFixed(2)}€</p>
      <p>Money saved: {discount.toFixed(2)}€</p>
    </footer>
  );
};
