<script setup>
// import { toRefs } from "vue";
// Notice how we use filteredData here in the child component
// Not filtered-data which we used in App.vue
const props = defineProps(["parsedData", "filteredData"]);
</script>
<template>
  <section>
    <p>{{ props.parsedData }}</p>
    <p>{{ props.filteredData }}</p>
  </section>
</template>

<!-- <style>

</style> -->
