import { useRouter } from "next/router";
import { useEffect } from "react";
import { Confirmation } from "../src/components/templates/Confirmation";
import { useStore } from "../src/store";

const ConfirmationPage = () => {
  const router = useRouter();
  const carts = useStore((state) => state.carts);

  useEffect(() => {
    if (carts.length == 0) {
      router.push("/");
    }
  }, [carts]);

  return (
    <>
      <Confirmation>
        <h2>Below you will find all approved and discarded products</h2>
      </Confirmation>
    </>
  );
};

export default ConfirmationPage;
