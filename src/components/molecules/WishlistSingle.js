import React from "react";
import { ItemContainer } from "../atoms/ItemContainer";

export const WishlistSingle = ({ child }) => {
  return (
    <ItemContainer className="wishlist-single">
      <h3>{`${child.name}'s wishlist`}</h3>
      <p>Gifts to approve: {child.wishlist.length}</p>
    </ItemContainer>
  );
};
