<template>
  <section class="aboutme-wrapper">
    <Title :title="title" />
    <div class="aboutme">
      <v-avatar size="150">
        <img :src="profile.image.path" :alt="profile.image.alt" />
      </v-avatar>
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.content }}</p>
    </div>
  </section>
</template>

<script>
import Title from "./Title";
export default {
  name: "aboutMe",
  components: {
    Title
  },
  data: () => ({
    title: "about me",
    profile: {
      image: {
        path: require("@/assets/images/avatar.jpg"),
        alt: "プロフィール画像"
      },
      name: "利光 正太",
      content:
        "明治大学４年生です。商学部でマーケティングを先行しています。現在は株式会社Journeyでサーバーサイドエンジニアをしています。現在制作中のため内容を徐々に充実させていきます"
    }
  })
};
</script>

<style scoped lang="scss">
.aboutme-wrapper {
  @include section;
}
.aboutme {
  @include flex-column;
  width: 80%;
  @include sp {
    width: 90%;
  }
  h2 {
    padding: 10px 0;
  }
}
</style>
