<script>
import { computed } from "vue";
import CustomComp from "./CustomComp.vue";

export default {
  components: { CustomComp },
  data() {
    return { counter: 10 };
  },
  methods: {
    // MUST DEFINE METHODS HERE
    addToCounter(n) {
      this.counter += n;
    },
    subtractFromCounter(n) {
      this.counter -= n;
    },
  },
  provide() {
    return {
      counter: computed(() => this.counter),
      addToCounter: this.addToCounter,
      subtractFromCounter: this.subtractFromCounter,
      // CANNOT DEFINE METHODS HERE
    };
  },
};
</script>

<template>
  <CustomComp />
</template>
