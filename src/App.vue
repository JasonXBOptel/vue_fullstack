<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
// Declare stateful value, which gets changed by pressing a button
// const pageNum = ref(1);
const results = ref({});

onMounted(() => {
  const callFN = async function () {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const parsed = resp.data;
      results.value = parsed;
    } catch (error) {
      console.error(error);
    }
  };
  callFN();
});
</script>

<template>
  <div id="app">
    <section>
      <!-- <button @click="pageNum++">Increment pageNum</button> -->
      <h1>API CALL RESULTS BELOW</h1>
      <!-- <h3>State Val: {{ pageNum }}</h3> -->
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
