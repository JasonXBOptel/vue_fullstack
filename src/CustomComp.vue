<script>
import DeepCustomComp from "./DeepCustomComp.vue";
export default {
  components: { DeepCustomComp },
  inject: ["liteStore"],
};
</script>

<template>
  <p>{{ liteStore.state }}</p>
  <DeepCustomComp />
</template>
