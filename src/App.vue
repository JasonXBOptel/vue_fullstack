<script setup>
import { ref } from "vue";
// Default value: A
const picked = ref("A"); // ref value will be set to value attribute
</script>

<template>
  <div>Picked: {{ picked }}</div>

  <section>
    <input type="radio" value="A" v-model="picked" />
    <label for="one">Option A</label>
  </section>

  <section>
    <input type="radio" value="B" v-model="picked" />
    <label for="two">Option B</label>
  </section>

  <section>
    <input type="radio" value="C" v-model="picked" />
    <label for="two">Option C</label>
  </section>
</template>

<style scoped>
section {
  display: flex;
  /* flex-direction: column; */
}
section input,
p {
  margin-left: 2rem;
}
</style>
