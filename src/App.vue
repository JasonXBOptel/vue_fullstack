<script setup>
import CustomComp from "./split/CustomComp.vue";
</script>
<!-- v-bind hardcoded non-string props -->
<!-- If you don't specify a prop value, it get auto-set to true -->
<template>
  <CustomComp
    trueVal
    :falseVal="false"
    :numVal="43"
    :specificNumVal="0"
    :nullishVal1="null"
    :nullishVal2="undefined"
    :dateVal="new Date()"
  />
</template>
<style src="./split/style.css"></style>
