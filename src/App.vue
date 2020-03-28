<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <Carriers />
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Carriers from "./components/Carriers";

export default {
  name: "App",

  components: {
    HelloWorld,
    Header,
    AboutMe,
    Carriers
  },

  data: () => ({
    //
  })
};
</script>
