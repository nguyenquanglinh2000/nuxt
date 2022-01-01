export const state = () => ({
  token: null,
  emailAuth: ''
})

export const actions = {
  async authenticate ({ commit }, payload) {
    let apiAuth =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
    if (payload.isLogin) {
      apiAuth =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
    }
    try {
      const result = await this.$axios.$post(apiAuth, {
        // email: payload.email,
        // password: payload.password,
        // returnSecureToken: true
        ...payload,
        returnSecureToken: true
      })
      commit('GET_AUTH', result.email)
      commit('SET_TOKEN', result.idToken)
      // console.log(result.idToken)
      // console.log(payload)
      this.$router.push('/admin/dashboard')
      // return console.log(result)
    } catch (error) {
      console.log('Error:', error)
    }
  }
}

export const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  LOGOUT (state) {
    state.token = null
  },
  GET_AUTH (state, payload) {
    state.emailAuth = payload
  }
}

export const getters = {}
