<script>
export default {
  props: ["api-url", "per-page"],
  data() {
    return { first: "uno", second: "dos", third: "tres" };
  },
};
</script>

<template>
  <h4>Behold the props object for each of our named slots</h4>
  <slot name="header" :message="first">Fallback text</slot>
  <br />
  <slot name="default" :message="second">Fallback text</slot>
  <br />
  <slot name="footer" :message="third">Fallback text</slot>
  <br />
  <slot name="footer" message="fourth hardcoded">Fallback text</slot>
</template>
