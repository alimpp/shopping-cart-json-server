import { defineStore } from "pinia";
export const productsDataStore = defineStore("products", {
  state: () => ({ products : [] }),
  getters: {
    newProducts(state){
      const items = state.products
      return items.slice(0,4)
    }
  },
  actions: {},
});