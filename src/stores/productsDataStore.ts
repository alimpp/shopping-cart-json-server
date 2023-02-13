import { defineStore } from "pinia";
export const productsDataStore = defineStore("products", {
  state: () => ({ products : [] }),
  getters: {},
  actions: {},
});