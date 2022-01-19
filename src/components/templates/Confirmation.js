import Link from "next/link";
import React from "react";
import { useStore } from "../../store";
import { ApprovedProducts } from "../organisms/ApprovedProducts";
import { DiscardedProducts } from "../organisms/DiscardedProducts";

export const Confirmation = ({ children }) => {
  const discarded = useStore((state) => state.allDiscarded);
  const approved = useStore((state) => state.allApproved);
  return (
    <section>
      <Link href="/">⬅️ Back to front page</Link>
      {children}
      <h3>Approved gifts:</h3>
      {approved.length == 0 ? <p>No approved gifts.</p> : <ApprovedProducts />}
      <br />
      <h3>Discarded gifts:</h3>
      {discarded.length == 0 ? (
        <p>No discarded gifts.</p>
      ) : (
        <DiscardedProducts />
      )}
    </section>
  );
};
