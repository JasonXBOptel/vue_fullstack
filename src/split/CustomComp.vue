<script setup>
const props = defineProps({
  // stringVal: String,
  // numVal: Number,
  obj: Object,
  list: Array,
});
</script>
<template>
  <!-- <div>{{ typeof props.stringVal }} : {{ props.stringVal }}</div> -->
  <!-- <div>{{ typeof props.numVal }} : {{ props.numVal }}</div> -->
  <div>{{ typeof props.obj }} : {{ props.obj }}</div>
  <div>{{ typeof props.list }} : {{ props.list }}</div>
</template>

<style></style>
