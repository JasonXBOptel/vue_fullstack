<script>
import CustomComp from "./split/CustomComp.vue";
export default {
  components: { CustomComp },
  data() {
    return { var1: "Stateful message" };
  },
};
</script>

<template>
  <CustomComp v-slot="slotProps">
    <h1>{{ slotProps.title }}</h1>
    <p>{{ slotProps.text }}</p>
  </CustomComp>
</template>
