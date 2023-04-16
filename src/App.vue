<script>
import CustomComp from "./CustomComp.vue";
export default {
  components: { CustomComp },
  data() {
    return { stateA: "def" };
  },
};
</script>

<template>
  <CustomComp v-model="stateA" />
</template>
