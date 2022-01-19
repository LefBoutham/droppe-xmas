import React from "react";
import { ItemContainer } from "../atoms/ItemContainer";

export const WishlistSingle = React.forwardRef(
  ({ child, onClick, href }, ref) => {
    return (
      <a href={href} ref={ref} onClick={onClick}>
        <ItemContainer className="wishlist-single">
          <h3>{`${child.name}'s wishlist 🎁`}</h3>
          <p>Gifts to approve: {child.wishlist.length}</p>
        </ItemContainer>
      </a>
    );
  }
);

WishlistSingle.displayName = "WishlistSingle";
