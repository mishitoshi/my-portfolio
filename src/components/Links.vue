<template>
  <div class="link-wrapper" id="link">
    <Title :title="title" />
    <ul class="link-items">
      <li v-for="(link, i) in links" :key="i" class="item elevation-5">
        <a :href="link.url" target="_blank"
          ><img :src="link.image_url" alt="" /><span>{{ link.name }}</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "Links",
  components: {
    Title
  },
  data: () => ({
    title: "Links",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/mishitoshi",
        image_url: "https://cdn.mishitoshi.com/images/logo_github.png"
      },
      {
        name: "Qiita",
        url: "https://qiita.com/mishikunxo",
        image_url: "https://cdn.mishitoshi.com/images/logo_qiita.png"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/mishikunxo",
        image_url: "https://cdn.mishitoshi.com/images/logo_twitter.svg"
      },
      {
        name: "Wantedly",
        url: "https://www.wantedly.com/users/101757829",
        image_url: "https://cdn.mishitoshi.com/images/logo_wantedly.svg"
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/toshimishito",
        image_url: "https://cdn.mishitoshi.com/images/logo_facebook.png"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.link-wrapper {
  @include section;
  background-color: $main-gray;
}
.link-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 70%;

  @include sp {
    width: 100%;
    @include flex-column;
  }
  li.item {
    display: flex;
    background-color: white;
    color: black;
    width: 45%;
    margin: 8px 0;
    padding: 8px 20px;
    @include sp {
      width: 100%;
    }
    a {
      display: flex;
      align-items: center;
      color: $light-black;
      font-size: 20px;
      height: 100%;
      width: 100%;
      img {
        width: 24px;
        height: auto;
        margin-right: 8px;
      }
    }
  }
}
</style>
