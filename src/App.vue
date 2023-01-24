<script setup>
import { ref } from "vue";
const efDevs = ref([
  { name: "Jason", age: 26 },
  { name: "Kelsey", age: 29 },
  { name: "Roland", age: 32 },
]);

const mutateArray = function () {
  // We manually redefine our stateful array using a non mutation method
  efDevs.value = efDevs.value.filter((person) => person.age < 30);
};
</script>
<template>
  <div>
    <button @click="mutateArray">Mutate array</button>

    <ul>
      <li v-for="({ name, age }, index) in efDevs" :key="index">
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
