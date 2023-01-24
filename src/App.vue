<script setup>
// import { ref, computed } from "vue";
// import { v4 as uuidv4 } from "uuid";

const obj = {
  name: "Spinel",
  color: "Pink",
  weapon: "Scythe",
  sanity: 0,
};
console.log(crypto.randomUUID());
const complexLogic = function (value, property) {
  console.log([value, property]);
  return value;
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(value, property) of obj" :key="property">
        {{ complexLogic(value, property) }}
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
