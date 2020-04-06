<template>
  <h2 class="section-title" :class="{ 'title-margin': isMargin }">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: ""
    },
    isMargin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.section-title {
  text-align: center;
  font-size: 48px;
  font-weight: normal;
  border-bottom: double 4px #6dd3f7;
  margin: 32px 0;
  width: auto;
}

.title-margin {
  margin-left: 10vw;
}
</style>
