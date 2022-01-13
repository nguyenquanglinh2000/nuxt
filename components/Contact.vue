<template>
  <!-- <div class="contact_icon"> -->
  // TODO: dùng class css vuetify
  <li
    style="border-right: 1px solid black; padding: 10px 30px; padding-top: 15px"
    class="contact_icon"
  >
    <v-icon color="black" class="mx-1" tag="a" href="https://fb.com">
      mdi-facebook
    </v-icon>
    <v-icon
      color="black"
      class="mx-1"
      tag="a"
      href="https://www.instagram.com/"
    >
      mdi-instagram
    </v-icon>
    <v-icon color="black" class="mx-1" tag="a" href="https://twitter.com/">
      mdi-twitter
    </v-icon>
  </li>
  <!-- </div> -->
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
