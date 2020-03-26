<template>
  <v-app>
    <Header />
    <v-content>
      <AboutMe />
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

export default {
  name: "App",

  components: {
    HelloWorld,
    Header,
    AboutMe
  },

  data: () => ({
    //
  })
};
</script>
