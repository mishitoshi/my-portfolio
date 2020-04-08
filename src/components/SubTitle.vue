<template>
  <h3 class="sub-title">{{ subTitle }}</h3>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    subTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.sub-title {
  padding: 4px 8px;
  border-left: 4px solid #6dd3f7;
  margin-bottom: 8px;
}
</style>
