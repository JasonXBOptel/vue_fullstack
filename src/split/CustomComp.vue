<script>
export default {
  data() {
    return { titleState: "Stateful title" };
  },
};
</script>
<template>
  <slot
    v-bind:title="titleState"
    v-bind:text="'Insert random hardcoded paragraph here'"
  >
  </slot>
</template>
