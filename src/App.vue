<script>
import CustomComp from "./split/CustomComp.vue";

export default {
  components: { CustomComp },
};
</script>

<template>
  <CustomComp>
    <template #header="headerProps">
      {{ headerProps }}
    </template>

    <template #default="defaultProps">
      {{ defaultProps }}
    </template>

    <template #footer="footerProps">
      {{ footerProps }}
    </template>
  </CustomComp>
</template>
