<template>
  <v-container fluid>
    <Title :title="title" />
    <v-simple-table light>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import Title from "./Title";
export default {
  name: "aboutMe",
  components: {
    Title
  },
  data: () => ({
    title: "about me",
    items: [
      {
        title: "name",
        content: "利光 正太"
      },
      {
        title: "university",
        content: "明治大学 商学部"
      }
    ]
  })
};
</script>

<style scoped lang="scss"></style>
