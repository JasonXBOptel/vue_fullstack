<script>
import axios from "axios";
export default {
  data() {
    return { page: 1, results: [] };
  },
  method: {},
  watch: {
    page: {
      // run watcher on startup (like useEffect with empty dep list)
      immediate: true,
      // When page state value changes, fetch new data from the API
      handler() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.page)
          .then((resp) => (this.results = resp.data))
          .catch((err) => console.error(err));
      },
    },
  },
};
</script>

<template>
  <div id="app">
    <p>{{ results }}</p>
    <h3>Page Number: {{ page }}</h3>
    <button @click="page++">Page forward</button>
    <button @click="page--">Page back</button>
  </div>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}
</style>
