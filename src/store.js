import create from "zustand";
import { devtools } from "zustand/middleware";

export let store = (set, get) => ({
  carts: [],
  setCarts: (cartsData) => {
    console.log("Carts:", cartsData);
    set((state) => ({ carts: cartsData }));
  },
  getCarts: () => {
    return get().carts;
  },
});

export const useStore = create(devtools(store));
