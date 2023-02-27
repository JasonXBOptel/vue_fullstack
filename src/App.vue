<script setup>
import { ref } from "vue";
import CustomComp from "./split/CustomComp.vue";
const msg = ref("Starting message");
const changeMsg = function (n) {
  msg.value = "Emitted event with this value: " + n;
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <CustomComp @signal-flare="changeMsg" />
</template>
