import React from "react";
import { ProductGrid } from "../organisms/ProductGrid";

export const WishlistView = ({ id }) => {
  return (
    <section>
      <h2>Childs products:</h2>
      <ProductGrid id={id} />
    </section>
  );
};
