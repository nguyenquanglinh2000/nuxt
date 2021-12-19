<template>
  <div class="blogs">
    <div class="blog-list">
      <v-row>
        <v-col v-for="(item, index) in blogs" :key="index" cols="6" class="blog mt-4">
          <nuxt-link :to="'/blogs/' + item.id">
            <v-card max-width="500" max-height="800" rounded flat class="card-blog">
              <v-img
                :src="item.image"
                max-height="600"
                max-width="500"
                min-height="580"
                contain
              />
              <v-card-title><h2>{{ item.title }}</h2></v-card-title>

              <v-card-text tag="p" style="overflow: hidden;text-overflow: initial;">
                {{ item.description }}
              </v-card-text>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['listBlog']),
    blogs () {
      return this.listBlog
    }
  },
  created () {
    this.$store.dispatch('get_data')
  }
}
</script>
<style scoped>
.blogs {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.blog-list {
  max-width: 60%;
}
.card-blog{
  border: 1px solid black;
  /* overflow: hidden;
  text-overflow: initial; */
}
.blog a {
  text-decoration: none;
}
</style>
