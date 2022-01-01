<template>
  <div>
    <v-card class="card-form px-5 py-5" width="600" flat>
      <v-card-title style="font-size: 30px">
        Login
      </v-card-title>
      <!-- <v-form -->
      <v-card-subtitle v-if="messeger" style="color: red">
        {{ messeger }}
      </v-card-subtitle>
      <v-text-field v-model="email" label="User" type="email" color="yellow" />
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        color="yellow"
      />
      <v-btn
        color="black"
        outlined
        @click="
          authenticate({
            email: email,
            password: password,
            isLogin: true
          })
        "
      >
        Login
      </v-btn>
      <v-card-subtitle>
        Have not a account?
        <nuxt-link tag="a" to="/register" style="color: pink">
          Regiter now?
        </nuxt-link>
      </v-card-subtitle>
      <!-- </v-form> -->
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  layout: 'layoutAuth',
  data () {
    return {
      email: '',
      password: '',
      messeger: ''
    }
  },
  computed: {
    ...mapState([''])
  },
  methods: {
    ...mapActions('auth', ['authenticate'])
  }
}
</script>
<style scoped>
.card-form {
  margin: auto;
  background-color: #00000000 !important;
  border: 1px solid white;
}
.card-form button:hover {
  background-color: rgb(251, 189, 199);
}
</style>
