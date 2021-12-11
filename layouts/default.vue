<template>
  <v-app dark class="main">
    <v-main>
      <nav-bar />
      <v-container>
        <Nuxt />
      </v-container>
      <subscribe />
      <list-blog-and-about />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap');
.main{
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
}
</style>
