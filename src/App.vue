<script setup>
import CustomComp from "./split/CustomComp.vue";
</script>
<!-- v-bind hardcoded non-string props -->
<template>
  <CustomComp trueVal :falseVal="false" :numVal="43" />
</template>
<style src="./split/style.css"></style>
