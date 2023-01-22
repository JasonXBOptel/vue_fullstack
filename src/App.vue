<script setup>
import { reactive } from "vue";
// Declare Initial State Value
const dims = reactive({
  length: 70,
  width: 30,
  height: 45,
});
</script>
<template>
  <h1>{{ countState }}</h1>
  <div>
    <h1>Length {{ dims.length }}</h1>
    <h1>Width {{ dims.width }}</h1>
    <h1>Height {{ dims.height }}</h1>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
