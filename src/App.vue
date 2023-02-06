<template lang="">
  <div>{{ results }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      results: [],
    };
  },
  created() {
    // pretend this is a backend endpoint (process would be the same)
    let endpoint = "https://jsonplaceholder.typicode.com/posts/1";
    axios
      .get(endpoint)
      .then((resp) => resp.data)
      .then((parsedData) => (this.results = parsedData))
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style lang=""></style>
