<script>
import TextBlock from "./components/TextBlock.vue";
// import axios from "axios";
export default {
  components: { TextBlock },
};
</script>

<template>
  <section>
    <text-block />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}
</style>
