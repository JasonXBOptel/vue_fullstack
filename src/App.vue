<script setup>
import { ref } from "vue";
const goBoolean = ref(true);

const decideColor = () => {
  if (goBoolean.value) return "green";
  else return "red";
};

console.log(goBoolean);
</script>

<template>
  <h1>hello</h1>
</template>

<style scoped>
h1 {
  color: v-bind(decideColor());
}
</style>
