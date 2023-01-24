<script setup>
// Create pagination blocks of size 3
// Render bullets abc def gh
let offset1 = 0;
let offset2 = 3;
let offset3 = 6;
const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
</script>
<template>
  <ul>
    <li v-for="(n, i) in 3" :key="n">
      {{ { letter: arr[i + offset1] } }}
    </li>
  </ul>
  <ul>
    <li v-for="(n, i) in 3" :key="n">
      {{ { letter: arr[i + offset2] } }}
    </li>
  </ul>
  <ul>
    <li v-for="(n, i) in 3" :key="n">
      {{ { letter: arr[i + offset3] } }}
    </li>
  </ul>
  <!-- </div> -->
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
li {
  background-color: azure;
}
ul {
  margin-bottom: 3rem;
}
button {
  font-size: 1.5rem;
}
</style>
