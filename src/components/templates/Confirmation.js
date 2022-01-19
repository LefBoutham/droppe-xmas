import React from "react";
import { ApprovedProducts } from "../organisms/ApprovedProducts";
import { DiscardedProducts } from "../organisms/DiscardedProducts";

export const Confirmation = ({ children }) => {
  return (
    <section>
      {children}
      <h3>Approved gifts:</h3>
      <ApprovedProducts />
      <br />
      <h3>Discarded gifts:</h3>
      <DiscardedProducts />
    </section>
  );
};
