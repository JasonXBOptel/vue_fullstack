<template lang="">
  <!-- Can access the state value directly in template block -->
  <section>
    <h2>Jason Stats: {{ grades }}</h2>
    <button @click="addToEnd(50)">Add entry to end</button>
    <button @click="removeFromStart">Remove entry from start</button>
    <button @click="halve">Remove second half</button>
    <button @click="calcAverage">Log average</button>
  </section>
</template>
<script>
// let regularVar = 9;
export default {
  data() {
    return {
      grades: [55, 70, 90, 60, 40, 62, 65],
    };
  },
  methods: {
    addToEnd(i) {
      this.grades.push(i);
    },
    removeFromStart() {
      this.grades.shift();
    },
    halve() {
      const halfwayPt = Math.floor(this.grades.length / 2);
      this.grades.splice(halfwayPt);
    },
    calcAverage() {
      let arr = this.grades;
      let sum = arr.reduce((acc, currVal) => acc + currVal, 0);
      console.log(sum / this.grades.length);
    },
  },
};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}
</style>
