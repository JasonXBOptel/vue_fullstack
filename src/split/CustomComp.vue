<script>
export default {
  props: ["api-url", "per-page"],
  data() {
    return {
      items: [
        { body: "Scoped Slots Guide", username: "Evan You", likes: 20 },
        { body: "Vue Tutorial", username: "Natalia Tepluhina", likes: 10 },
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(listObj, index) in items" v-bind:key="index">
      <slot name="listObj" v-bind="listObj" />
    </li>
  </ul>
</template>

<!-- <style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style> -->
