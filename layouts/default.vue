<template>
  <v-app>
    <v-main class="blog_main">
      <intro />
      <nav-bar />
      <v-container>
        <Nuxt />
      </v-container>
      <my-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'getData'
}
</script>
<style scoped>

.blog_main {
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
}
</style>
