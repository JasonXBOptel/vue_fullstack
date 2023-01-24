<script setup>
import { ref } from "vue";
const efRef = ref([
  { name: "Jason", age: 26 },
  { name: "Kelsey", age: 30 },
  { name: "Roland", age: 32 },
]);

const extendStateArray = function () {
  efRef.value.push({ name: "Shiho", age: 24 });
};
</script>
<template>
  <div>
    <button @click="() => efRef.push({ name: 'Shiho', age: 24 })">
      Extend array- use ref in template block
    </button>
    <button @click="extendStateArray">
      Extend array- use ref in script block
    </button>
    <ul>
      <li v-for="({ name, age }, index) in efRef" :key="index">
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
