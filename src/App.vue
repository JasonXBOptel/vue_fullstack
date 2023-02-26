<script>
import CustomComp from "./split/CustomComp.vue";
export default {
  components: { CustomComp },
  data() {
    return { msg: "Starting message" };
  },
  methods: {
    changeMsg(n) {
      this.msg = "Event was emitted, and passed this value: " + n;
    },
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <CustomComp @signalFlare="changeMsg" />
</template>
