<template>
  <div>
    <Title :title="title" />
    <v-timeline>
      <v-timeline-item
        v-for="(carrier, i) in carriers"
        :key="i"
        small
        :color="color"
      >
        <template v-slot:opposite>
          <span v-text="carrier.year"></span>
        </template>
        <div>
          <h2>{{ carrier.title }}</h2>
          <div>
            {{ carrier.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import Title from "./Title";

export default {
  name: "Carriers",
  components: {
    Title
  },
  data: () => ({
    title: "Carriers",
    carriers: [
      {
        title: "明治大学入学",
        text: "明治大学に入学しました。",
        year: "2016/04"
      },
      {
        title: "明治大学入学",
        text: "明治大学に入学しました。",
        year: "2016/04"
      },
      {
        title: "明治大学入学",
        text: "明治大学に入学しました。",
        year: "2016/04"
      },
      {
        title: "明治大学入学",
        text: "明治大学に入学しました。",
        year: "2016/04"
      },
      {
        title: "明治大学入学",
        text: "明治大学に入学しました。",
        year: "2016/04"
      }
    ],
    color: "amber lighten-2"
  })
};
</script>

<style scoped lang="scss"></style>
