<template>
  <div class="dashboard">
    <v-card width="300" height="300">
      <v-card-title
        style="display: flex; justify-content: center; font-size: 50px"
      >
        Posts
      </v-card-title>

      <v-card-text style="font-size: 70px" class="my-16">
        {{ listBlog.length }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  data () {
    return {}
  },
  computed: {
    ...mapState('post', ['listBlog'])
  }
}
</script>
<style scoped>
.dashboard {
  text-align: center;
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
