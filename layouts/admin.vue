<template>
  <v-app>
    <v-app-bar fixed app>
      <div class="plus">
        <v-btn icon color="pink" tag="a" to="/admin/post/create-post">
          <v-icon x-large>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
      <div class="star">
        <v-btn icon color="yellow" @click="favoriteList">
          <v-icon x-large>
            mdi-star
          </v-icon>
        </v-btn>
      </div>

      <v-spacer />
      <v-avatar class="mx-2">
        <v-img
          src="https://randomuser.me/api/portraits/men/85.jpg"
          loading="lazy"
        />
      </v-avatar>
      <v-app-bar-title>{{ emailAuth }}</v-app-bar-title>
      <v-menu offset-y class="mx-2">
        <template #activator="{ on }">
          <v-btn icon class="ma-5" v-on="on">
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list class="blog_bar">
          <v-list-item v-for="(item, index) in menuDropDown" :key="index">
            <v-list-item-title>
              <v-icon :color="item.color">
                {{ item.icon }}
              </v-icon>
              <nuxt-link tag="a" :to="item.to">
                {{ item.title }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item tag="a" @click="logout">
            <v-icon color="red">
              mdi-logout
            </v-icon>
            Logout
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      fixed
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>

        <v-list-item-title>Admin</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="blog_main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  middleware: 'auth',
  data () {
    return {
      drawer: true,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          link: '/admin/dashboard'
        },
        { title: 'My Post', icon: 'mdi-post-outline', link: '/admin/post' }
        // { title: 'Users', icon: 'mdi-account-group-outline', link: '/admin/user' }
      ],
      menuDropDown: [
        {
          title: 'Profile',
          icon: 'mdi-account',
          color: 'black',
          to: '/admin/profile'
        }
      ],
      mini: true
    }
  },
  computed: {
    ...mapState('auth', ['emailAuth'])
  },
  created () {
    // this.$store.dispatch('post/getData')
    // eslint-disable-next-line no-undef
    // dispatch('getData')
  },
  methods: {
    ...mapActions('post', ['getData']),
    logout () {
      // console.log(this.emailAuth)
    },
    favoriteList () {}
  }
}
</script>

<style scoped>
/* TODO: define global fonts */

.blog_main {
  font-family: 'Open Sans', sans-serif;
  background-color: rgb(230, 230, 230);
}
.blog_bar a {
  text-decoration: none;
  color: black;
}
</style>
