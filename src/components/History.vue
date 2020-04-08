<template>
  <div class="history-wrapper" id="history">
    <Title :title="title" :is-margin="isMargin" />
    <v-timeline class="history" :dense="dense">
      <v-timeline-item
        v-for="(history, i) in histories"
        :key="i"
        :color="color"
      >
        <template v-slot:opposite>
          <span>{{ history.year }}</span>
        </template>
        <v-card raised>
          <v-card-title class="title font-weight-bold">{{
            history.title
          }}</v-card-title>
          <v-card-subtitle v-show="toggleYear">{{
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
    color: "#309fff",
    histories: [
      {
        year: "2016/04",
        title: "明治大学入学",
        text:
          "入学してからはやりたいことが見つからず、バイトに明け暮れていました。"
      },
      {
        year: "2018/08",
        title: "総合職のインターンに参加",
        text:
          "この頃に就活を始め、野村証券、三菱UFJモルガン・スタンレー証券のインターンシップに参加しました。"
      },
      {
        year: "2019/02",
        title: "プログラミングに出会う",
        text:
          "Amazon Primeでシリコンバレーというドラマを見てエンジニアに憧れ、プログラミングを始めました。" +
          "そこからプログラミングにはまり、総合職での就活をやめてエンジニアを目指すことにしました。"
      },
      {
        year: "2019/09~現在",
        title: "株式会社Journey",
        text:
          "ミニッツ(https://minute.jp/)というサービスの新規機能開発、外部サービスとの連携、保守など幅広くの業務に携わっています。" +
          "サーバーサイドはRuby, フロントエンドはJavaScriptやjQueryを書いています。"
      }
    ]
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
    toggleYear() {
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
  background-color: $main-gray;
  @include sp {
    padding-left: 0;
  }
}

.history {
  width: 70%;
  @include sp {
    width: 100%;
  }
}
</style>
