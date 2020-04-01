<template>
  <div>
    <Title :title="title" />
    <v-container>
      <v-row>
        <v-col v-for="(link, i) in links" cols="12" :key="i">
          <a :href="link.url">{{ link.name }}</a>
        </v-col>
      </v-row>
    </v-container>
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
        url: "https://github.com/mishitoshi"
      },
      {
        name: "Qiita",
        url: "https://qiita.com/mishikunxo"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/mishikunxo"
      },
      {
        name: "Wantedly",
        url: "https://www.wantedly.com/users/101757829"
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/toshimishito"
      }
    ]
  })
};
</script>

<style scoped></style>
