<script setup>
import { ref } from "vue";
import CustomComp from "./split/CustomComp.vue";
let post = ref({
  id: 1,
  title: "My Journey with Vue",
});
let num = ref(10);
const mutateNum = () => num.value++;
</script>
<template>
  <CustomComp :post="post" :num="num" :mutateNum="mutateNum" />
</template>
<style src="./split/style.css"></style>
