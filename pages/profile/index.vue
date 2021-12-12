<template>
  <div class="profile">
    <v-row>
      <v-col cols="12">
        <v-card width="700" height="400" color="#F0F0F0" style="margin: auto">
          <v-avatar size="200">
            <v-img
              contain
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/186459686_1382972778728718_215763214952527065_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tcg-jR3oKwgAX_7dvO4&_nc_oc=AQkGwmYo4UNOBbHXBvVToipowS0akJFt7Rs8jcXy4CQP0lznl1CGFfsWvrRw5JciPlI&_nc_ht=scontent.fhan3-5.fna&oh=edeac42ad85bf603788226ca7ea8dcb4&oe=61D18B17"
              alt=""
            />
          </v-avatar>
          <v-card-title class="profile">
            {{ $store.state.emailAuth }}
          </v-card-title>
          <v-row>
            <v-col cols="9" offset="1">
              <v-card-actions>
                <dialog-create />
              </v-card-actions>
            </v-col>
            <v-col cols="1">
              <v-card-actions>
                <v-btn color="#9e9e9e" @click="logout">
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="my-10">
        <v-card
          v-for="(item, index) in blogAuth"
          :key="index"
          class="my-5 list"
          height="200"
          width="1000"
          rounded
          style="margin: auto"
        >
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
                <v-list-item-title>{{ itemMenu.item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <nuxt-link :to="'/blogs/' + item.id">
            <v-card-title>
              <h2>{{ item.title }}</h2>
            </v-card-title>
            <v-card-subtitle class="my-3 description">
              {{ item.description }}
            </v-card-subtitle>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import auth from 'middleware/auth'
export default {
  middleware: 'auth',
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
    blogAuth () {
      // console.log('Run blogAuth')
      return this.$store.state.listBlog.filter((blog) => {
        // console.log('Blog:', blog)
        // console.log('email: ', this.$store.state.emailAuth)
        return blog.author === this.$store.state.emailAuth
      })
    }
  },
  created () {
    this.$store.dispatch('GET_DATA')
  },
  // watch: {
  //   dialog (newC, oldC) {
  //     console.log(newC)
  //     console.log(oldC)
  //   }
  // },
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
  }
}
</script>
<style scoped>
.profile {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
}
.list a {
  text-decoration: none;
  color: black;
}
.list button {
  float: right;
}
.description{
  float: left;
}
.itemMenu :hover{
  background: #dfdfdf;
}
</style>
