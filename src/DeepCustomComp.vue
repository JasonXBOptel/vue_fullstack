<script setup>
import { inject } from "vue";
const liteStore = inject("liteStore");
console.log("liteStore: ", liteStore);
</script>

<template lang="">
  <button @click="liteStore.changeName('Jason')">Change name to Jason</button>
  <button @click="liteStore.changeName('')">Clear Name</button>
</template>
