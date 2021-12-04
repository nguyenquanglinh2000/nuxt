<template>
  <v-card flat>
    <v-toolbar height="100">
      <div class="nav">
        <ul>
          <li>
            <nuxt-link tag="a" to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/blogs">
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/profile">
              Profile
            </nuxt-link>
          </li>
        </ul>
        <div class="dialog">
          <v-dialog v-model="dialog" width="500">
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" color="success" v-on="on">
                Create
              </v-btn>
            </template>

            <v-card>
              <v-card-text style="color: red; text-align: center">
                {{ messege }}
              </v-card-text>
              <v-form @submit.prevent="createBlog">
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
                <!-- <v-card-actions> -->
                <v-btn type="submit" color="success" class="mx-5 my-5">
                  Create
                </v-btn>
                <!-- </v-card-actions> -->
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
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      title: '',
      description: '',
      image: '',
      messege: '  '
    }
  },
  methods: {
    createBlog () {
      if (!this.$store.getters.getToken) {
        this.$router.push('/login')
      }
      // eslint-disable-next-line eqeqeq
      if (this.title.length + this.description.length + this.image.length <= 3) {
        this.messege = 'Please enter full information'
      } else {
        this.$store.dispatch('CREATEBLOG', {
          title: this.title,
          description: this.description,
          image: this.image
        })
        this.dialog = false
        alert('Create Successful')
      }
    }
  }
}
</script>
<style scoped>
.nav {
  min-width: 100%;
}
.dialog {
  float: right;
}
ul {
  list-style-type: none;
  text-align: center;
}
li {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin-left: -5px;
}
ul li a {
  text-decoration: none;
  color: black;
  display: block;
  font-size: 30px;
}
a:hover {
  background: #f1f1f1;
}
</style>
