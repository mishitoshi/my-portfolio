<template>
  <header>
    <v-navigation-drawer app v-model="drawer">
      <v-list :two-line="twoLine">
        <v-subheader v-html="subHeader"></v-subheader>
        <v-list-item-group color="primary" v-model="item">
          <v-list-item v-for="(item, i) in items" :key="i" :href="item.id">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="white" hide-on-scroll>
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
        id: "#about-me",
        title: "About Me"
      },
      { id: "#history", title: "History" },
      { id: "#skill", title: "Skills" },
      {
        id: "#link",
        title: "Links"
      }
    ]
  })
};
</script>

<style scoped lang="scss"></style>
