<template>
  <div class="skill-wrapper" id="skill">
    <Title :title="title" />
    <div class="skill" v-for="(skill, i) in skills" :key="i">
      <SubTitle :sub-title="skill.subtitle" />
      <div class="skill-items">
        <span v-for="(content, i) in skill.content" :key="i" class="item elevation-3">
          {{ content }}
        </span>
        <span>etc...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import SubTitle from "./SubTitle";

export default {
  name: "Skills",
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
          "JavaScript",
          "jQuery",
          "GitHub",
          "GitHubFlow",
          "Slack",
          "MySQL",
          "Redis",
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
        content: ["Go", "Nuxt.js"]
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
      padding: 4px 8px;
      border-left: 4px solid #6dd3f7;
      margin-bottom: 8px;
    }
    .skill-items {
      display: flex;
      flex-wrap: wrap;
      font-size: 16px;
      margin-bottom: 12px;
      span {
        padding: 8px;
        margin: 8px 0px;
        &:not(:last-child) {
          margin: 8px;
        }
      }
      .item {
        background-color: $main-gray;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
}
</style>
