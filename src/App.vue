<template lang="">
  <!-- Can access the state value directly in template block -->
  <h2>Jason Stats: {{ grades }}</h2>
  <button @click="jasonPowerup">Add entry to end</button>
  <button @click="jasonPowerup">Remove entry from start</button>
  <button @click="jasonPowerup">Remove second half</button>
</template>
<script>
let regularVar = 9;
export default {
  methods: {
    addToEnd() {},
    removeFromStart() {},
    halve() {},
    calcAverage() {},
  },
  data() {
    return {
      grades: [55, 70, 90, 60, 40, 62, 65],
    };
  },
};
</script>
<style lang=""></style>
