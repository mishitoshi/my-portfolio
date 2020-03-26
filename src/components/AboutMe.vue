<template>
  <v-container fluid>
    <h2 class="sectionTitle">{{ title }}</h2>
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
export default {
  name: "aboutMe",
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
      },

    ]
  })
};
</script>

<style scoped lang="scss">
.sectionTitle {
  font-size: 48px;
  text-align: center;
  font-weight: 500;
}
</style>
