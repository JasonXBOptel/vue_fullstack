<script setup>
const ef = [
  { name: "Jason", strength: "Next.js" },
  { name: "Kelsey", strength: "CSS" },
  { name: "Roland", strength: "Node" },
];
// const renderChunks = function (i, offset) {};
</script>
<template>
  <ul>
    <section v-for="(profile, i) of ef" :key="i">
      <h1 v-for="(val, property) of profile" :key="property">
        {{ val }}
      </h1>
    </section>
  </ul>
</template>

<style scoped>
li {
  font-size: 1.5rem;
}
div {
  display: flex;
  flex-direction: column;
}

li {
  background-color: rgb(150, 194, 194);
}
ul {
  margin-bottom: 3rem;
}
button {
  font-size: 1.5rem;
}
</style>
