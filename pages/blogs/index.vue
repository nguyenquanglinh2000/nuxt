<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in blogs" :key="index" cols="12" class="blog">
        <v-card height="400" width="600">
          <v-img :src="item.image" max-height="300" max-width="600" />
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'blogLayout',
  computed: {
    blogs () {
      return this.$store.state.listBlog
    }
  },
  created () {
    this.$store.dispatch('GET_DATA')
  }
}
</script>
<style scoped>
.blog {
  display: flex;
  justify-content: center;
}
</style>
