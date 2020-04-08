<template>
  <div class="skill-wrapper" id="skill">
    <Title :title="title" />
    <div class="skill" v-for="(skill, i) in skills" :key="i">
      <SubTitle :sub-title="skill.subtitle" />
      <div class="skill-items">
        <span
          v-for="(item, i) in skill.items"
          :key="i"
          class="item elevation-3"
        >
          {{ item }}
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
    skills: [
      {
        subtitle: "実務経験あり",
        items: [
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
        items: [
          "CircleCI",
          "Docker",
          "Vue.js",
          "AWS(ECS, ECR, RDS, S3 etc..)",
          "React"
        ]
      },
      {
        subtitle: "興味がある",
        items: ["Go", "Nuxt.js"]
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
    width: 70%;
    @include sp {
      width: 100%;
    }
    .skill-items {
      display: flex;
      flex-wrap: wrap;
      font-size: 16px;
      margin-bottom: 12px;
      span {
        padding: 8px;
        margin: 8px;
        &:last-child {
          margin-left: 0;
        }
      }
      .item {
        color: $light-black;
        background-color: $main-gray;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
}
</style>
