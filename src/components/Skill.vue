<template>
  <div>
    <Title :title="title" />
    <v-container>
      <SubTitle :sub-title="subTitle1" />
      <v-row>
        <v-col v-for="(skill, i) in skills1" :key="i" cols="6" md="3">
          {{ skill }}
        </v-col>
      </v-row>
      <SubTitle :sub-title="subTitle2" />
      <v-row>
        <v-col v-for="(skill, i) in skills2" :key="i" cols="6" md="3">
          {{ skill }}
        </v-col>
      </v-row>
      <SubTitle :sub-title="subTitle3" />
      <v-row>
        <v-col v-for="(skill, i) in skills3" :key="i" cols="6" md="3">
          {{ skill }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Title from "./Title";
import SubTitle from "./SubTitle";

export default {
  name: "Skill",
  components: {
    Title,
    SubTitle
  },
  data: () => ({
    title: "Skills",
    // TODO: とりあえず形だけ実装、要命名
    subTitle1: "実務経験あり",
    subTitle2: "実務経験なし",
    subTitle3: "興味がある",
    skills1: ["Ruby", "JavaScript", "GitHub", "StackDriver"],
    skills2: ["Ruby", "JavaScript", "GitHub", "StackDriver"],
    skills3: ["Ruby", "JavaScript", "GitHub", "StackDriver"]
  })
};
</script>

<style scoped></style>
