import React from "react";
import { useStore } from "../../store";
import { WishlistSingle } from "../molecules/WishlistSingle";

export const WishlistsGrid = (props) => {
  const children = useStore((state) => state.children);
  return (
    <div className="wishlists-grid">
      {children.map((child) => {
        return <WishlistSingle key={children.id} child={child} />;
      })}
    </div>
  );
};
