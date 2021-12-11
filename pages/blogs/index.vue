<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in blogs" :key="index" cols="12" class="blog">
        <nuxt-link :to="'/blogs/' + item.id">
          <v-card height="200" width="1000" rounded>
            <!-- <v-img :src="item.image" max-height="300" max-width="600" /> -->
            <v-card-title><h2>{{ item.title }}</h2></v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  // layout: 'blogLayout',
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
.blog a {
  text-decoration: none;
}
</style>
