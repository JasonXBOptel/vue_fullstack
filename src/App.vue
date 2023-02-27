<script>
import CustomComp from "./split/CustomComp.vue";
export default {
  components: { CustomComp },
  data() {
    return { var1: "uno" };
  },
};
</script>

<template>
  <CustomComp>
    <template v-slot:title>
      <h1>Why ChatGPT is Overrated</h1>
    </template>

    <template #mainBody>
      <p>It costs money</p>
      <p>Primarily excels at performing minor tasks</p>
    </template>

    <template #footer>
      <p>Rate, comment, and subscribe</p>
    </template>
  </CustomComp>
</template>
