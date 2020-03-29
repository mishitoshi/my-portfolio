<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <Carriers />
      <Skill />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Carriers from "./components/Carriers";
import Skill from "./components/Skill";

export default {
  name: "App",

  components: {
    Header,
    AboutMe,
    Carriers,
    Skill
  },

  data: () => ({
    //
  })
};
</script>
