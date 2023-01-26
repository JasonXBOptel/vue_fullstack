<script setup>
import { ref, watch } from "vue";
// Declare stateful value, which gets changed by pressing a button
const pageNum = ref(1);
//! https://jsonplaceholder.typicode.com/posts/5
</script>

<template>
  <div id="app">
    <section>
      <button @click="pageNum++">Increment pageNum</button>
      <h1>API CALL RESULTS BELOW</h1>
      <h3>State Val: {{ pageNum }}</h3>
      <p></p>
    </section>
  </div>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  margin: 1rem;
  margin-left: 0;
}
</style>
