import React from "react";
import { ProductGrid } from "../organisms/ProductGrid";

export const WishlistView = (props) => {
  return (
    <section>
      <h2>Childs products:</h2>
      Loop through:
      <ProductGrid />
    </section>
  );
};
