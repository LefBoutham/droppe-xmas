import { useRouter } from "next/router";
import { useEffect } from "react";

export function usePageId() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
  }, [id]);

  return id;
}
