<template>
  <div>
    <v-card class="card-form px-5 py-5" width="600" color="#c8c8c887">
      <v-card-title>Login</v-card-title>
      <v-form @submit.prevent="onSubmit">
        <v-card-subtitle v-if="messeger" style="color: red">
          {{ messeger }}
        </v-card-subtitle>
        <v-text-field v-model="email" placeholder="User" type="email" />
        <v-text-field
          v-model="password"
          placeholder="Password"
          type="password"
        />
        <v-btn type="submit" color="success">
          Login
        </v-btn>
        <v-card-subtitle>
          Have not a account?
          <nuxt-link tag="a" to="/register">
            Regiter now?
          </nuxt-link>
        </v-card-subtitle>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: 'layoutAuth',
  data () {
    return {
      email: '',
      password: '',
      messeger: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store
        .dispatch('AUTHENTICATE', {
          email: this.email,
          password: this.password,
          isLogin: true
        })
        .then((result) => {
          // console.log(result)
          if (result.success) {
            this.$router.push('/profile')
          }
        })
        .catch((e) => {
          if (e) {
            this.messeger = 'Email or password is invalid'
          }
        })
    }
  }
}
</script>
<style scoped>
.card-form {
  margin: auto;
}
</style>
