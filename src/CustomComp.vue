<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<template>
  <label for="fname">Text Field: </label>
  <input
    type="text"
    v-bind:value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    name="fname"
  />
  <p>stateA value: {{ modelValue }}</p>
</template>
