<script setup>
// const props = defineProps({ post: Object, num: Number });
const props = defineProps({
  numVal: {
    type: Number,
    required: true,
  },
});

// const tryToMutatePost
</script>
<template>
  <section>
    <!-- <button @click="mutateNum">Mutate Num from Parent</button>
    <div>{{ typeof props.post }} : {{ props.post }}</div> -->
    <div>{{ typeof props.numVal }} : {{ props.numVal }}</div>
  </section>
</template>
<!-- <style>

</style> -->
