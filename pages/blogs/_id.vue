<template>
  <div>
    <v-card class="mx-auto">
      <!-- <v-img class="blog" :src="blogs.image" max-height="1200" max-width="1500" /> -->
      <v-card-title>{{ blogs.title }}</v-card-title>
      <v-card-text>{{ blogs.description }}</v-card-text>
    </v-card>
    <!-- <p>{{ blogs.image }}</p> -->
  </div>
</template>
<script>
export default {
  layout: 'blogLayout',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    blogs () {
      return this.$store.state.listBlog.find((blog) => {
        return blog.id === this.id
      })
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
