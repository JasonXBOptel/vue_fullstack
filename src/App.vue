<script setup>
import { ref, onMounted, watch, watchEffect } from "vue";
import axios from "axios";
// Declare stateful value, which gets changed by pressing a button
const pageNum = ref(1);
const results = ref({});

const fetchThenUpdate = async function (num) {
  try {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${num}`
    );
    results.value = resp.data;
  } catch (error) {
    console.error(error);
  }
};

// Callback runs on startup by default
// Run callback that fetches data whenever pageNum reactive value changes
watchEffect(async function () {
  try {
    await fetchThenUpdate(pageNum.value); // involves results reactive variable
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div id="app">
    <section>
      <button @click="pageNum++">Increment pageNum</button>
      <h3>State Val: {{ pageNum }}</h3>
      <h3>API CALL RESULTS BELOW</h3>
      <p>{{ results }}</p>
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
