<script setup>
import CustomComp from "./CustomComp.vue";
import { ref } from "vue";
const stateA = ref(""); // default value is an empty string
</script>

<template>
  <CustomComp v-model="stateA" />
</template>
