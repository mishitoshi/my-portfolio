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
          "この頃に就活を始め、野村証券、三菱UFJモルガン・スタンレー証券のインターンシップに参加しました。参加すると同時に、自分はこのままやりたいかどうかわからない営業職の就活を続けていいのかと思い始めました。"
      },
      {
        year: "2019/02",
        title: "プログラミングに出会う",
        text:
          "Amazon Primeでシリコンバレーというドラマを見ました。その際にエンジニアに憧れ、普段何気なく使っているネイティブアプリやwebサービスがどのように動いているか気になりプログラミングを始めました。" +
          "そこからプログラミングにはまり、総合職での就活をやめてエンジニアを目指すことにしました。"
      },
      {
        year: "2019/07",
        title: "初めてのポートフォリオサイト完成",
        text:
          "ポートフォリオサイトをプログラミングを始めて3ヶ月の時に開発をし始め、5ヶ月目で完成させました。" +
          "未経験ながらモダンな技術を意識し、AWSやDocker,CircleCIなどを導入しました。今コードや構成を見ると恥ずかしいですが思い出のサービスです。" +
          "README(https://github.com/mishitoshi/Studire)に詳しい構成が載っています。" +
          "※現在はEC2インスタンスを停止しています。"
      },
      {
        year: "2019/09~現在",
        title: "株式会社Journey",
        text:
          "2019年9月から現在まで、株式会社Journeyにて後払いホテル予約サービスminute(https://minute.jp/)というサービスの開発に携わっています。" +
          "サーバーサイドエンジニアをしていますが、フロントエンドを書くこともあります。業務では、Github Flowを用いた1週間スプリントのスクラムでの開発を行なっており、新規機能開発、既存コードの運用、外部サービス連携、SEO対策等です。" +
          "実務で使ったことがある技術は、Ruby, Ruby on Rails, JavaScript, jQuery, GCP, AWS, CircleCI等です。一番得意なのはRubyを用いたサーバーサイドの開発です。" +
          "基本的なエンジニアとしての業務は一通りこなした経験があります。"
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
