<template>
  <h2 class="section-title">{{ title }}</h2>
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
.section-title {
  text-align: center;
  font-size: 48px;
  font-weight: normal;
  border-bottom: double 4px #6DD3F7;
  margin-bottom: 32px;
  width: 0 auto;
}
</style>
