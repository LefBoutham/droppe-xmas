import { useRouter } from "next/router";

export default function WishlistPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <p>New wishlist page id: {id}</p>
    </>
  );
}
