<template>
  <div class="dialog">
    <v-card>
      <v-card-title style="font-size:30px">
        Create Post
      </v-card-title>
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
          label="email"
        />
        <v-card-title class="text-h5 lighten-2">
          Description
        </v-card-title>
        <v-text-field
          v-model="description"
          outlined
          class="mx-5"
          placeholder="Description"
          label="description"
        />
        <v-card-title class="text-h5 lighten-2">
          Image
        </v-card-title>
        <v-text-field
          v-model="image"
          outlined
          class="mx-5"
          placeholder="Link Image"
          label="image"
        />
        <v-btn type="submit" color="success" class="mx-5 my-5">
          Submit
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
    <!-- </v-dialog> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      title: '',
      description: '',
      image: '',
      messege: ''
    }
  },
  computed: {
    ...mapState(['emailAuth'])
  },
  methods: {
    createBlog () {
      // eslint-disable-next-line eqeqeq
      if (
        this.title + this.description + this.image === ''
      ) {
        this.messege = 'Please enter full information'
      } else {
        this.$store.dispatch('create_blog', {
          title: this.title,
          description: this.description,
          image: this.image,
          author: this.emailAuth
        }).then((result) => {
          if (result.check) {
            this.dialog = false
            alert('Create Successful')
            this.$router.push('/admin/post')
          } else {
            alert(result.alert)
          }
        })
      }
    }
  }
}
</script>
