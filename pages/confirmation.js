import { useRouter } from "next/router";
import { useEffect } from "react";
import { Confirmation } from "../src/components/templates/Confirmation";
import { useStore } from "../src/store";

const ConfirmationPage = () => {
  const total = useStore((state) => state.totalCost);
  const discount = useStore((state) => state.discount);

  return (
    <>
      <Confirmation>
        <h2>
          {discount == 0
            ? `Total price: ${total.toFixed(2)}€`
            : `You saved ${discount.toFixed(2)}€ totaling at ${total.toFixed(
                2
              )}€ !`}
        </h2>
      </Confirmation>
    </>
  );
};

export default ConfirmationPage;
