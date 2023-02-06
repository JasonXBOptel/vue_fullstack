<script setup>
import { ref } from "vue";
import CustomComp from "./split/CustomComp.vue";
let var1 = ref("Bella");
let var2 = ref("Missy");
</script>
<template>
  <CustomComp :parsedData="var1" :filtered-data="var2" />
</template>
<style src="./split/style.css"></style>
