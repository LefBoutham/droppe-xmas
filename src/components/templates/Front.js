import React from "react";
import { WishlistsGrid } from "../organisms/WishlistsGrid";

export const Front = ({ children }) => {
  return (
    <section>
      {children}
      <WishlistsGrid />
    </section>
  );
};
