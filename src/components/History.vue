<template>
  <div class="history-wrapper" id="history">
    <Title :title="title" :is-margin="isMargin" />
    <v-timeline class="history" :dense="dense">
      <v-timeline-item
        v-for="(history, i) in histories"
        :key="i"
        small
        :color="color"
      >
        <template v-slot:opposite>
          <span>{{ history.year }}</span>
        </template>
        <v-card raised>
          <v-card-title class="headline">{{ history.title }}</v-card-title>
          <v-card-subtitle v-show="toggleSubtitle">{{
            history.year
          }}</v-card-subtitle>
          <v-card-text>{{ history.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import Title from "./Title";

export default {
  name: "History",
  components: {
    Title
  },
  data: () => ({
    title: "History",
    width: window.innerWidth,
    histories: [
      {
        year: "2016/04",
        title: "明治大学入学",
        text: "明治大学に入学しました。"
      },
      {
        year: "2018/08",
        title: "レイアウト確認",
        text:
          "レイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウト"
      },
      {
        year: "2019/02",
        title: "レイアウト確認",
        text:
          "レイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウトレイアウト"
      }
    ],
    color: "#309fff"
  }),
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
    }
  },
  computed: {
    dense() {
      return this.width < 576;
    },
    toggleSubtitle() {
      return this.width < 576;
    },
    isMargin() {
      return this.width < 576;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped lang="scss">
.history-wrapper {
  @include section;
  background-color: #ebf0f4;
  @include sp {
    padding-left: 0;
  }
}

.history {
  width: 100%;
}
</style>
