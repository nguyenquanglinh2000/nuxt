<template>
  <v-app>
    <v-main class="blog_main">
      <v-container>
        <h1>Lỗi rồi bạn êii!!!</h1>
        <v-img
          src="http://www.setra.com/hubfs/Sajni/crc_error.jpg"
          loading="lazy"
          max-width="400"
          max-height="600"
        />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>

.blog_main {
  font-family: 'Open Sans', sans-serif;
  background-color: #ffff;
  text-align: center;
  margin: auto;
}
</style>
