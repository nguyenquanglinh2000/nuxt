<template>
  <div class="post">
    <v-spacer />

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
        <v-btn
          v-if="item.favorite"
          color="yellow"
          icon
          @click="change_favorite({ id: item.id, favorite: item.favorite })"
        >
          <v-icon> mdi-star </v-icon>
        </v-btn>
        <v-btn
          v-else
          icon
          :disabled="favoriteNum == 3"
          @click="change_favorite({ id: item.id, favorite: item.favorite })"
        >
          <v-icon> mdi-star </v-icon>
        </v-btn>
        <v-spacer />
        <!-- <v-menu>
          <template #activator="{ on }">
            <v-btn icon color="black" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="itemMenu">
            <v-list-item
              v-for="(itemMenu, indexMenu) in items"
              :key="indexMenu"
              @click="handle(
                {
                  id: itemMenu.id,
                  idPost: item.id,
                  title: item.title,
                  description: item.description,
                  image: item.image,
                })"
            >
              <v-list-item-title>
                {{ itemMenu.item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <v-btn icon color="red" @click="delete_data(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn
          icon
          color="blue"
          @click="
            handle({
              idPost: item.id,
              title: item.title,
              description: item.description,
              image: item.image
            })
          "
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-title>
      <v-row>
        <v-col cols="4">
          <v-img
            :src="item.image"
            loading="lazy"
            max-width="300"
            class="mx-3 mb-10"
          />
        </v-col>
        <v-col cols="8">
          <nuxt-link :to="'/blogs/' + item.id">
            <v-card-title style="color: #000; font-size: 30px">
              {{ item.title }}
            </v-card-title>
          </nuxt-link>
          <v-card-subtitle class="my-3" style="color: black">
            {{ item.description }}
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>

    <div class="dialog">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-text style="color: yellow; text-align: center">
            {{ messege }}
          </v-card-text>
          <v-form
            @submit.prevent="
              update_data({
                id: id,
                title: title,
                description: description,
                image: image
              })
            "
          >
            <v-card-title class="text-h5 lighten-2">
              Title
            </v-card-title>
            <v-text-field
              v-model="title"
              outlined
              class="mx-5"
              placeholder="Title"
            />
            <v-card-title class="text-h5 lighten-2">
              Description
            </v-card-title>
            <v-text-field
              v-model="description"
              outlined
              class="mx-5"
              placeholder="Description"
            />
            <v-card-title class="text-h5 lighten-2">
              Image
            </v-card-title>
            <v-text-field
              v-model="image"
              outlined
              class="mx-5"
              placeholder="Link Image"
            />
            <v-btn type="submit" color="success" class="mx-5 my-5">
              Update
            </v-btn>
          </v-form>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'admin',
  data () {
    return {
      // items: [
      //   {
      //     id: 1,
      //     item: 'Edit'
      //   },
      //   {
      //     id: 2,
      //     item: 'Delete'
      //   }
      // ],
      dialog: false,
      title: '',
      description: '',
      image: '',
      messege: '',
      id: ''
    }
  },
  computed: {
    ...mapState('post', ['listBlog']),
    ...mapState('auth', ['emailAuth']),
    favoriteNum () {
      const arr = this.listBlog.filter((favorite) => {
        return favorite.favorite === true
      })
      return arr.length
    }
  },
  methods: {
    ...mapActions('post', ['delete_data', 'update_data', 'change_favorite']),
    handle (id) {
      // console.log(id)
      // if (id.id === 1) {
      // Handle Edit
      this.dialog = true
      this.title = id.title
      this.description = id.description
      this.image = id.image
      this.id = id.idPost
    }
  }
  // favoriteStar (id) {
  //   this.$store.dispatch('change_favorite', id)
  // }
  // logOut () {
  //   this.$store.dispatch('logout')
  // }
}
// }
</script>
<style scoped>
.itemMenu :hover {
  background: #dfdfdf;
}
a {
  text-decoration: none;
}
.plus {
  float: right;
}
</style>
