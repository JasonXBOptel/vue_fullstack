<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
};
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
  font-size: 2rem;
  padding: 4%;
  width: 20rem;
}
</style>
