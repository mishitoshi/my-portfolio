<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <History />
      <Skills />
      <Links />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import History from "./components/History";
import Skills from "./components/Skills";
import Links from "./components/Links";

export default {
  name: "App",

  components: {
    Header,
    AboutMe,
    History,
    Skills,
    Links
  },

  data: () => ({
    //
  })
};
</script>
