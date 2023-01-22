<script setup>
import { ref, unref } from "vue";
// Declare Initial State Value
let inputRef = ref("");
// Create function that manipulates state value
let logFieldText = function () {
  // Get ref value with property drilling
  console.log(inputRef.value);
  // Get ref value with unRef
  console.log(unref(inputRef));
  // Demonstrate unRef with a regular variable
  const vari = "effervescent";
  console.log(unref(vari));
};
</script>
<template>
  <h1>{{ countState }}</h1>
  <div>
    <button @click="logFieldText">Press to log text inside input field</button>
    <input ref="inputRef" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
