<script setup>
import { ref, computed } from "vue";
// Declare stateful array
const cart = ref([
  {
    item: "Wire tray",
    price: 26,
  },
  {
    item: "USB-C adaptor",
    price: 22,
  },
  {
    item: "Extension Cable",
    price: 14,
  },
]);
// Create computed value that auto-updates when cart stateful value changes
const cartTotal = computed(() => {
  return cart.value.reduce((acc, curr) => acc + curr.price, 0);
});
// Calc a value normally (no auto-updates)
const staticCartTotal = cart.value.reduce((acc, curr) => acc + curr.price, 0);
// Function that adds entries to the stateful array
const addToCart = function () {
  cart.value.push({ item: "Eraser", price: 2 });
  console.log(cart.value);
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(entry, i) of cart" :key="i">
        <h4>item: {{ entry.item }}</h4>
        <h6>price: {{ entry.price }}</h6>
      </li>
      <h2>TOTAL: {{ cartTotal }}</h2>
      <button @click="addToCart">Add to cart</button>
    </ul>
  </div>
</template>

<style scoped>
li {
  font-size: 1.5rem;
}
div {
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  flex-direction: row;
}
button {
  font-size: 1.5rem;
}
</style>
