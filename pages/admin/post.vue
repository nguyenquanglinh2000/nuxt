<template>
  <div class="post">
    <v-spacer />
    <div class="plus">
      <!-- <v-btn icon color="pink">
        <v-icon x-large>
          mdi-plus
        </v-icon>
      </v-btn> -->
      <dialog-create />
    </div>

    <v-card
      v-for="(item, index) in listBlog"
      :key="index"
      class="my-5 list"
      width="600"
      rounded
      style="margin: auto"
      flat
    >
      <v-card-title>
        <v-spacer />
        <v-menu>
          <template #activator="{ on }">
            <v-btn icon color="black" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="itemMenu">
            <v-list-item
              v-for="(itemMenu, indexMenu) in items"
              :key="indexMenu"
              @click="handle(itemMenu.id)"
            >
              <v-list-item-title>
                {{ itemMenu.item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-row>
        <v-col cols="4">
          <v-img :src="item.image" loading="lazy" max-width="200" class="mx-3 mb-10" />
        </v-col>
        <v-col cols="8">
          <nuxt-link :to="'/blogs/' + item.id">
            <v-card-title style="color: #000; font-size:30px">
              {{ item.title }}
            </v-card-title>
          </nuxt-link>
          <v-card-subtitle class="my-3" style="color: black;">
            {{ item.description }}
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  data () {
    return {
      items: [
        {
          id: 1,
          item: 'Edit'
        },
        {
          id: 2,
          item: 'Delete'
        }
      ]
    }
  },
  computed: {
    ...mapState(['listBlog'])
  },
  methods: {
    handle (id) {
      // console.log(id)
      if (id === 1) {
        // Handle Edit
      } else {
        // Handle Delete
      }
      // this.$router.push('/')
    }
    // logOut () {
    //   this.$store.dispatch('logout')
    // }
  }
}
</script>
<style scoped>
.itemMenu :hover{
  background: #dfdfdf;
}
a {
  text-decoration: none;
}
.plus {
  float: right;
}
</style>
