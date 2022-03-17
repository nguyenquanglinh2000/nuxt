<template>
  <div class="dialog">
    <v-card>
      <v-card-title style="font-size: 30px">
        Create Post
      </v-card-title>
      <v-card-text style="color: red; text-align: center">
        {{ messeger }}
      </v-card-text>
      <v-form
        @submit.prevent="
          createBlog({
            title,
            description,
            image,
            emailAuth
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
          label="Title"
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
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      title: '',
      description: '',
      image: '',
      messeger: ''
    }
  },
  computed: {
    ...mapState('auth', ['emailAuth'])
  },
  methods: {
    ...mapActions('post', ['createBlog'])
  }
}
</script>
