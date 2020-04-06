<template>
  <div class="skill-wrapper">
    <Title :title="title" />
    <div class="skill" v-for="(skill, i) in skills" :key="i">
      <SubTitle :sub-title="skill.subtitle" />
      <div class="skill-items">
        <span v-for="(content, i) in skill.content" :key="i" class="item">
          #{{ content }}
        </span>
        <span class="item">etc...</span>
      </div>
    </div>
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
    skills: [
      {
        subtitle: "実務経験あり",
        content: [
          "HTML",
          "CSS",
          "Ruby",
          "RubyonRails",
          "slim",
          "JavaScript",
          "jQuery",
          "GitHub",
          "GitHubFlow",
          "Slack",
          "MySQL",
          "GCP(StackDriber etc..)",
          "AWS(EC2, Route53)"
        ]
      },
      {
        subtitle: "実務経験なし",
        content: [
          "CircleCI",
          "Docker",
          "Vue.js",
          "AWS(ECS, ECR, RDS, S3 etc..)",
          "React"
        ]
      },
      {
        subtitle: "興味がある",
        content: ["Golang", "Nuxt.js"]
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.skill-wrapper {
  @include section;
  .skill {
    @include flex-column;
    align-items: start;
    width: 80%;
    @include sp {
      width: 90%;
    }
    h3 {
      padding: 10px 0;
    }
    .skill-items {
      display: flex;
      flex-wrap: wrap;
      font-size: 16px;
      .item {
        padding: 8px;
      }
    }
  }
}
</style>
