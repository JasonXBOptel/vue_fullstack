<script setup>
import { ref, isProxy, toRaw } from "vue";

const devs = ref(["Aria", "Roland", "Jason", "Kelsey"]);

const editArray = function () {
  // Edit state array
  devs.value[0] = "Shiho";
  // Access updated state data immediately afterwards
  console.log(devs.value[0]);
};
</script>
<template>
  <div>
    <!-- We need to drill into our reactive object to access width and height -->
    <h1>EF Team: {{ devs }}</h1>
  </div>
  <button @click="editArray">Edit first array entry</button>
</template>

<style scoped>
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
