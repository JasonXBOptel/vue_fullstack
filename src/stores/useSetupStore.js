import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSetupStore = defineStore("setupStore", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function multiply(payload) {
    count.value = count.value * payload;
  }

  return { count, doubleCount, increment, multiply };
});
