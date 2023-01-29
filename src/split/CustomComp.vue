<script setup>
const props = defineProps({
  trueVal: Boolean,
  falseVal: Boolean,
  numVal: Number,
});
</script>
<template>
  <div>{{ typeof props.trueVal }} : {{ props.trueVal }}</div>
  <div>{{ typeof props.falseVal }} : {{ props.falseVal }}</div>
  <div>{{ typeof props.numVal }} : {{ props.numVal }}</div>
</template>

<style></style>
