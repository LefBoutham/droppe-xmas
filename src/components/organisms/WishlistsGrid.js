import React from "react";
import { WishlistSingle } from "../molecules/WishlistSingle";

export const WishlistsGrid = (props) => {
  return (
    <div className="wishlists-grid">
      <h1>Loop through:</h1>
      <WishlistSingle />
    </div>
  );
};
