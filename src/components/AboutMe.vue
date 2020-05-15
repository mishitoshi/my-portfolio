<template>
  <section class="aboutMe-wrapper" id="about-me">
    <Title :title="title" />
    <div class="aboutMe">
      <v-avatar size="150">
        <img :src="profile.image.url" :alt="profile.image.alt" />
      </v-avatar>
      <h2>{{ profile.name }}</h2>
      <div>
        <p v-for="(text, i) in profile.texts" :key="i" class="profile-text">
          {{ text }}
        </p>
      </div>
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
    title: "About me",
    profile: {
      image: {
        url: "https://cdn.mishitoshi.com/images/avatar.jpg",
        alt: "プロフィール画像"
      },
      name: "利光 正太(23)",
      texts: [
        "はじめまして！利光正太です。21卒の明治大学商学部4年生です。22019年2月にプログラミングに出会い、2019年9月から株式会社Journeyでwebエンジニアをしています。Rubyが得意です。",
        "趣味：DAZNでサッカー観戦(プレミア・リーガ)・旅行・料理"
      ]
    }
  })
};
</script>

<style scoped lang="scss">
.aboutMe-wrapper {
  @include section;
}
.aboutMe {
  @include flex-column;
  width: 70%;
  @include sp {
    width: 90%;
  }
  h2 {
    padding: 10px 0;
  }
  p {
    font-size: 0.95rem;
    color: $light-black;
  }
}
.profile-text {
  text-align: left;
}
</style>
