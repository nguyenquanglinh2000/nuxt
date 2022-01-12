<template>
  <div class="blog-detailt">
    <div class="blog-inline">
      <v-card class="mx-auto" flat>
        <v-card-title class="mx-3 title">
          <p>{{ blogs.title }}</p>
        </v-card-title>
        <v-card-text class="mx-3">
          {{ blogs.description }}
        </v-card-text>
        <v-img class="blog" :src="blogs.image" max-height="600" contain />
        <span>Something</span>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState('post', ['listBlog']),
    blogs () {
      return this.listBlog.find((blog) => {
        return blog.id === this.id
      })
    }
  }
  // created () {
  //   this.$store.dispatch('get_data')
  // }
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
  width: 80%;
  border: 1px solid black;
}
.title p {
  font-weight: 700;
  font-size: 50px;
}
@media (max-width: 575px) {
  .title p {
    font-weight: 700;
    font-size: 25px;
  }
}

@media (min-width: 740px) {
  .title p {
    font-weight: 700;
    font-size: 25px;
  }
}

@media screen and (min-width: 1024px) {
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
    width: 80%;
    border: 1px solid black;
  }
  .title p {
    font-weight: 700;
    font-size: 40px;
  }
}
</style>
