<template>
  <h2 class="sectionTitle">{{ title }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.sectionTitle {
  font-size: 48px;
  text-align: center;
  font-weight: 500;
}
</style>
