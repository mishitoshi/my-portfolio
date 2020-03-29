<template>
  <h3>{{ subTitle }}</h3>
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

<style scoped></style>
