import React from "react";
import { ApprovedProducts } from "../organisms/ApprovedProducts";
import { DiscardedProducts } from "../organisms/DiscardedProducts";

export const Confirmation = ({ children }) => {
  return (
    <section>
      {children}
      Approved products grid:
      <ApprovedProducts />
      <br />
      Discarded products grid:
      <DiscardedProducts />
    </section>
  );
};
