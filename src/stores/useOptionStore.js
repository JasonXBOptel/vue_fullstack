import { defineStore } from "pinia";

export const useOptionStore = defineStore("optionStore", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    multiply(payload) {
      this.counter = this.counter * payload;
    },
  },
});
