<script setup>
// const props = defineProps({ post: Object, num: Number });
const props = defineProps(["num", "post", "mutateNum"]);

// const tryToMutatePost
</script>
<template>
  <section>
    <button @click="mutateNum">Try to Mutate Num</button>
    <div>{{ typeof props.post }} : {{ props.post }}</div>
    <div>{{ typeof props.num }} : {{ props.num }}</div>
  </section>
</template>
<!-- <style>

</style> -->
