<script>
import CustomComp from "./split/CustomComp.vue";

export default {
  components: { CustomComp },
  data() {
    return { first: "uno", second: "dos", third: "tres" };
  },
};
</script>

<template>
  <CustomComp api-url="url" v-bind:per-page="10">
    <template v-slot:listObj="{ body, username, likes }">
      <div>
        <p>{{ body }}</p>
        <p class="meta">by {{ username }}</p>
        <p>Number of likes: {{ likes }}</p>
      </div>
    </template>
  </CustomComp>
</template>

<!-- <style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style> -->
