<template>
  <div class="dialog">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" color="success" v-on="on">
          Create Article
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
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      title: '',
      description: '',
      image: '',
      messege: ''
    }
  }
}
</script>
