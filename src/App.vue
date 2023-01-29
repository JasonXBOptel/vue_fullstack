<!-- eslint-disable no-unused-vars -->
<script setup>
// import { ref } from "vue";
import CustomComp from "./split/CustomComp.vue";
const obj = {
  name: "Munroop",
  main: "Fox",
};
const list = [
  { name: "Jason", age: 26 },
  { name: "Kelsey", age: 30 },
  { name: "Roland", age: 32 },
];
</script>
<!-- Import the split HTML and CSS files -->
<template>
  <CustomComp stringVal="Filler text" numVal="43" :obj="obj" :list="list" />
</template>
<style src="./split/style.css"></style>
