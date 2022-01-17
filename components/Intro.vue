<template>
  <div class="blog_intro_page">
    <div class="nav_small">
      <v-row align="center">
        <v-col cols="10">
          <v-text-field
            placeholder="Search..."
            color="pink"
            prepend-icon="mdi-magnify"
            hide-details
            full-width
          />
        </v-col>
        <v-col cols="2">
          <v-btn icon class="icon_menu" x-large @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
        <v-navigation-drawer v-model="drawer" hide-overlay>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link to="/">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-row>
    </div>
    <span>EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</span>
    <br>
    <nuxt-link to="/" tag="a">
      Train of Thought
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: null,
      items: [{ title: 'Home' }, { title: 'About' }]
    }
  }
}
</script>

<style scoped>

.blog_intro_page {
  text-align: center;
  padding: 5%;
}
.blog_intro_page a {
  font-family: 'Playfair Display', serif;
  font-size: 116px;
  text-decoration: none;
  color: black;
}
span {
  font-size: 25px;
  font-family: 'Readex Pro', sans-serif;
  letter-spacing: 0.4em;
}
@media (max-width: 575px) {
  .blog_intro_page a {
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    text-decoration: none;
    color: black;
  }
  span {
    font-size: 15px;
    font-family: 'Readex Pro', sans-serif;
    letter-spacing: 0.4em;
  }
}

@media (min-width: 740px) {
  .nav_small {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .nav_small {
    display: none;
  }
}
</style>
