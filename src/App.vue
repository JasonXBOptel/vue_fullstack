<script setup>
import { ref } from "vue";
// Create a state variable to reference when using v-model
const typedInput = ref(""); // default value is an empty string
</script>

<template>
  <section>
    <p>Reactive val: {{ typeof typedInput }}</p>
    <input v-model.number="typedInput" placeholder="edit me" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}
</style>
