<template>
  <div>
    <v-card class="card-form px-5 py-5" width="600" flat>
      <v-card-title style="font-size:30px">Register</v-card-title>
      <v-form @submit.prevent="onSubmit">
        <v-card-subtitle v-if="messeger" style="color: red">
          {{ messeger }}
        </v-card-subtitle>
        <v-text-field v-model="email" label="User" type="email" color="yellow" />
        <v-text-field
          v-model="password"
          label="Password"
          color="yellow"
          type="password"
        />
        <v-text-field
          v-model="re_password"
          label="Re-Password"
          type="password"
          color="yellow"
        />
        <v-btn type="submit" color="black" outlined>
          Register
        </v-btn>
        <v-card-subtitle>
          Have a account?
          <nuxt-link tag="a" to="/login" style="color:pink">
            Login now?
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
      re_password: '',
      messeger: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.password !== this.re_password) {
        this.messeger = ' Password is not the same'
      } else {
        // console.log('Run onSubmit')
        this.$store
          .dispatch('authenticate', {
            email: this.email,
            password: this.password
          })
          .then((reusult) => {
            if (reusult) {
              this.$router.push('/admin/dashboard')
            } else {
              this.messeger = 'Email or password is invalid'
            }
          })
      }
    }
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
