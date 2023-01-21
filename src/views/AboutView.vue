<script setup>
import TextBlock from "../components/TextBlock.vue";
</script>
<template>
  <div>
    <p>About page</p>
    <TextBlock />
  </div>
</template>
<style scoped>
p {
  color: red;
  /* affects the TextBlock instance nested inside AboutView's template tags */
  /* Does not affect the one nested inside InfoView */
}
</style>
