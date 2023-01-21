<script setup>
import { ref } from "vue";
// Declare Initial State Value
let countState = ref(10);
// Create function that manipulates state value
let double = function () {
  countState.value = countState.value * 2;
};
let multiply = function (i) {
  countState.value = countState.value * i;
};
</script>
<template>
  <h1>{{ countState }}</h1>
  <div>
    <button @click="countState++">Add 1</button>
    <button @click="countState--">Minus 1</button>
    <button @click="countState = countState - 3">Minus 3</button>
    <button @click="double">Double</button>
    <button @click="multiply(5)">X 5</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
