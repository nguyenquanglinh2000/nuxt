<template>
  <v-app>
    <v-main class="main">
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap');
.main {
  font-family: 'Open Sans', sans-serif;
  background-color: #ffff;
  text-align: center;
  margin: auto;
}
</style>
