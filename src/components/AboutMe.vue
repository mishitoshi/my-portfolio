<template>
  <section class="aboutMe-wrapper" id="about-me">
    <Title :title="title" />
    <div class="aboutMe">
      <v-avatar size="150">
        <img :src="profile.image.url" :alt="profile.image.alt" />
      </v-avatar>
      <h2>{{ profile.name }}</h2>
      <div>
        <p>{{ profile.text }}</p>
        <p>{{ profile.hobby }}</p>
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
      text:
        "はじめまして！利光正太です。明治大学商学部の4年生で現在休学中です。2019年の2月にプログラミングに出会い、2019年の9月から株式会社Journeyでwebエンジニアをしています。Rubyが得意です。",
      hobby: "趣味：DAZNでサッカー観戦(プレミア・リーガ)・旅行・料理"
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
  width: 80%;
  @include sp {
    width: 90%;
  }
  h2 {
    padding: 10px 0;
  }
  p {
    font-size: 0.9rem;
    color: $light-black;
  }
}
</style>
