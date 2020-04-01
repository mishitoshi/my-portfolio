<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <Carriers />
      <Skill />
      <Links />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Carriers from "./components/Carriers";
import Skill from "./components/Skill";
import Links from "./components/Links";

export default {
  name: "App",

  components: {
    Header,
    AboutMe,
    Carriers,
    Skill,
    Links
  },

  data: () => ({
    //
  })
};
</script>
