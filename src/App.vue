<script setup>
import { ref } from "vue";
// Create a state variable to reference when using v-model
const message = ref("");
</script>

<template>
  <section>
    <p>message (reactive variable): {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </section>
</template>
<style>
section {
  display: flex;
  flex-direction: column;
}
</style>
