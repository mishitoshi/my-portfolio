<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <History />
      <Skill />
      <Links />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import History from "./components/History";
import Skill from "./components/Skill";
import Links from "./components/Links";

export default {
  name: "App",

  components: {
    Header,
    AboutMe,
    History,
    Skill,
    Links
  },

  data: () => ({
    //
  })
};
</script>
