<script setup>
import CustomComp from "./split/CustomComp.vue";
</script>

<template>
  <CustomComp>
    <h1 class="title">Slot content featured below</h1>
    <p>This text will be available in the child component</p>
  </CustomComp>
</template>

<style scoped>
.title {
  color: blue;
}
</style>
