<script>
export default {
  emits: ["signalFlare"],
  methods: {
    clickHandler() {
      this.$emit("signalFlare", 10); // this.$emit within <script>
    },
  },
};
</script>
<template>
  <section>
    <button @click="clickHandler">Click me to emit an event!</button>
    <button @click="$emit('signalFlare', 99)">I also emit an event!</button>
  </section>
</template>

