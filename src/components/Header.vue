<template>
  <header>
    <v-navigation-drawer app v-model="drawer">
      <v-list :two-line="twoLine">
        <v-subheader v-html="subHeader"></v-subheader>
        <v-list-item-group color="primary" v-model="item">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle
            ></v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="amber lighten-4" dark hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: null,
    twoLine: true,
    item: 4,
    subHeader: "sitemap",
    items: [
      {
        title: "Profile",
        content: "プロフィールです。"
      },
      {
        title: "skills",
        content: "使用可能なスキルです。"
      },
      {
        title: "carriers",
        content: "今までの経歴です。"
      },
      {
        title: "link",
        content: "私に関わるリンクです。"
      }
    ]
  })
};
</script>

<style scoped lang="scss"></style>
