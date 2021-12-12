<template>
  <div class="blog-detailt">
    <div class="blog-inline">
      <v-card class="mx-auto" flat>
        <v-card-title style="font-weight: 700; font-size: 50px;" class="mx-3">
          {{ blogs.title }}
        </v-card-title>
        <v-card-text style="font-weight: 700; font-size: 17px; color:black" class="mx-3">
          {{ blogs.description }}
        </v-card-text>
        <v-img class="blog" :src="blogs.image" max-height="600" contain />
        <p>Something</p>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout',
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
.blog-detailt {
    min-width: 100%;
    display: flex;
    justify-content: center;
}
.blog-inline {
  width: 50%;
  border: 1px solid black;
}
</style>
