<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["signalFlare"]);
const clickHandler = function (n) {
  emit("signalFlare", n); // this.$emit does not work in <script> when using Composition API
};
</script>
<template>
  <section>
    <button @click="clickHandler(1)">Click me to emit an event!</button>
    <button @click="$emit('signalFlare', 2)">I also emit an event!</button>
  </section>
</template>
