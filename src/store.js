import create from "zustand";
import { devtools } from "zustand/middleware";

export let store = (set, get) => ({
  carts: [],
  setCarts: (cartsData) => {
    set((state) => ({ carts: cartsData }));
  },
  allocateCarts: () => {
    const carts = get().carts;
    const children = get().children;

    children.forEach((child) => {
      let products = carts[child.id - 1].products.map((p) => ({
        ...p,
        quantity: 1,
        price: 9,
      }));

      let wishlist = products;
      child.wishlist = wishlist;
    });

    set(() => ({ children: children }));
  },
  approveGift: (productId, childId) => {
    // Defining selectors
    const children = get().children;
    let child = children[childId - 1];
    let wishlist = child.wishlist;
    let approvedList = child.approvedList;

    // Defining updated wishlist and approved products
    const updatedWishlist = wishlist.filter((p) => p.productId != productId);
    const approvedProduct = wishlist.find((p) => p.productId == productId);

    // Setting new values
    wishlist = updatedWishlist;
    approvedList = approvedList.concat(approvedProduct);
    child.wishlist = wishlist;
    child.approvedList = approvedList;
    set({ children: [...children] });

    // Aggregated approved list
    let allApproved = get().allApproved;

    // If product exists, add quantity. If doesn't, concat list.
    let exists = false;
    allApproved.map((p) => {
      if (p.productId == approvedProduct.productId) {
        p.quantity = p.quantity + 1;
        exists = true;
      }
    });
    if (!exists) allApproved = allApproved.concat(approvedProduct);

    set({ allApproved: allApproved });
    get().calculateCost();
  },
  discardGift: (productId, childId) => {
    // Defining selectors
    const children = get().children;
    let child = children[childId - 1];
    let wishlist = child.wishlist;
    let discardedList = child.discardedList;

    // Defining updated wishlist and discarded products
    const updatedWishlist = wishlist.filter((p) => p.productId != productId);
    const discardedProduct = wishlist.find((p) => p.productId == productId);

    // Setting new values
    wishlist = updatedWishlist;
    discardedList = discardedList.concat(discardedProduct);
    child.wishlist = wishlist;
    child.discardedList = discardedList;
    set({ children: [...children] });

    // Aggregated discarded list
    let allDiscarded = get().allDiscarded;

    // If product exists, add quantity. If doesn't, concat list.
    let exists = false;
    allDiscarded.map((p) => {
      if (p.productId == discardedProduct.productId) {
        p.quantity = p.quantity + 1;
        exists = true;
      }
    });
    if (!exists) allDiscarded = allDiscarded.concat(discardedProduct);

    set({ allDiscarded: allDiscarded });
    get().calculateCost();
  },
  children: [
    {
      name: "Monica",
      id: 1,
      wishlist: [],
      approvedList: [],
      discardedList: [],
    },
    {
      name: "Rachel",
      id: 2,
      wishlist: [],
      approvedList: [],
      discardedList: [],
    },
    { name: "Joey", id: 3, wishlist: [], approvedList: [], discardedList: [] },
    {
      name: "Chandler",
      id: 4,
      wishlist: [],
      approvedList: [],
      discardedList: [],
    },
    { name: "Ross", id: 5, wishlist: [], approvedList: [], discardedList: [] },
  ],
  calculateCost: () => {
    const approved = get().allApproved;
    let total = 0;
    let moneySaved = 0;

    // Add price to total cost and reduce discount
    approved.map((p) => {
      if (p.quantity != 1) {
        let newPrice = p.price * p.quantity * (1 - p.quantity / 10);
        moneySaved += p.price * p.quantity - newPrice;
        total += newPrice;
      } else {
        total += p.price;
      }
    });

    // Set new prices and money saved
    set({ totalCost: total, discount: moneySaved });
  },
  allApproved: [],
  allDiscarded: [],
  totalCost: 0,
  discount: 0,
  pushCartsToApi: async () => {
    const children = get().children;

    // Push approved and discarded carts to API for each child
    children.forEach(async (child) => {
      // Reformat approved products to original form
      let approvedProducts = child.approvedList.map((gift) => {
        return { productId: gift.productId, quantity: gift.quantity };
      });

      // Reformat discarded products to original form
      let discardedProducts = child.discardedList.map((gift) => {
        return { productId: gift.productId, quantity: gift.quantity };
      });

      // Push approved products to API
      await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: child.id,
          date: new Date(),
          products: approvedProducts,
        }),
      })
        .then((res) => res.json())
        .then((json) =>
          console.log(
            `${child.name} approved products pushed to API, response:`,
            json
          )
        );

      // Push discarded products to API
      await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: child.id,
          date: new Date(),
          products: discardedProducts,
        }),
      })
        .then((res) => res.json())
        .then((json) =>
          console.log(
            `${child.name} discarded products pushed to API, response:`,
            json
          )
        );
    });
  },
});

export const useStore = create(devtools(store));
