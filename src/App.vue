<script setup>
// import { ref } from "vue";
const arr = [
  { name: "Jason", age: 26 },
  { name: "Kelsey", age: 30 },
  { name: "Roland", age: 32 },
];
</script>
<template>
  <div>
    <ul>
      <li v-for="({ name, age }, index) in arr" :key="index">
        <h4>Name: {{ name }}</h4>
        <h6>Age: {{ age }}</h6>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  font-size: 1.5rem;
}
div {
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  flex-direction: row;
}
button {
  font-size: 1.5rem;
}
</style>
