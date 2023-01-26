<script setup>
import { ref } from "vue";
const imagePath = ref(
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
);
</script>

<template>
  <h1>Charmeleon!</h1>
  <img :src="imagePath" />
</template>

<style scoped></style>
