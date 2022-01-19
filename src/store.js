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
      let wishlist = carts[child.id - 1].products;
      child.wishlist = wishlist;
    });

    set(() => ({ children: children }));
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
});

export const useStore = create(devtools(store));
