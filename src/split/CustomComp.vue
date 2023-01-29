<script setup>
const props = defineProps({
  trueVal: Boolean,
  falseVal: Boolean,
  numVal: Number,
  specificNumVal: 0 || 1, // can make it so prop equals one of a list of specific values
  nullishVal1: null || undefined, // can make it so props can be multiple types
  nullishVal2: null || undefined,
  dateVal: Object, // dates are considered Objects in JS
});
</script>
<template>
  <div>{{ typeof props.trueVal }} : {{ props.trueVal }}</div>
  <div>{{ typeof props.falseVal }} : {{ props.falseVal }}</div>
  <div>{{ typeof props.numVal }} : {{ props.numVal }}</div>
  <div>{{ typeof props.specificNumVal }} : {{ props.specificNumVal }}</div>
  <div>{{ typeof props.nullishVal1 }} : {{ props.nullishVal1 }}</div>
  <div>{{ typeof props.nullishVal2 }} : {{ props.nullishVal2 }}</div>
  <div>{{ typeof props.dateVal }} : {{ props.dateVal }}</div>
</template>
