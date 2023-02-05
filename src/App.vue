<script>
// import axios from "axios";
export default {
  data() {
    return {
      name: "Jason",
      stats: ["a", "b", "c"],
    };
  },
  methods: {
    shallowMutation() { this.name = "Mitch" }, // prettier-ignore
    deepMutation() { this.stats.level++ }, // prettier-ignore
    editList() { this.stats = [] }, // prettier-ignore
  },
  watch: {
    // Purposefully shallow watcher
    name() {
      console.log("Shallow name mutation made!");
    },
    // THIS DOES NOT FIRE WHEN stats.level changes
    stats() {
      console.log("Shallow stats mutation made!");
    },
    // THIS DOES FIRE WHEN stats.level CHANGES
    // stats: {
    //   handler() {
    //     console.log("Shallow or Deep stats mutation made!");
    //   },
    //   deep: true,
    // },
  },
};
</script>

<template>
  <div id="app">
    <p>{{ name }}</p>
    <p>{{ stats }}</p>
    <button @click="shallowMutation">Change name (shallow)</button>
    <button @click="editList">Extend List</button>
    <!-- <button @click="this.name=''">Change name</button> -->
  </div>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}
</style>
