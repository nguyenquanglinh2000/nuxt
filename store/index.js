import Vuex from 'vuex'
const store = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      listBlog: [],
      token: null
    },
    actions: {
      AUTHENTICATE (context, payload) {
        return new Promise((resolve, reject) => {
          let apiAuth =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
          if (payload.isLogin) {
            apiAuth =
              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
          }
          this.$axios
            .$post(apiAuth, {
              email: payload.email,
              password: payload.password,
              returnSecureToken: true
            })
            .then((result) => {
              // console.log(result.idToken)
              context.commit('setToken', result.idToken)
              resolve({ success: true })
            })
            .catch((error) => {
              reject(error)
            })
        })
      },
      CREATEBLOG (context, payload) {
        this.$axios
          .$post(
            'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json/?auth=' +
              context.state.token,
            {
              title: payload.title,
              description: payload.description,
              image: payload.image
            }
          )
          .then((data) => {
            console.log(data)
          })
          .catch((e) => {
            console.log(e)
          })
      },
      GET_DATA (context) {
        return this.$axios
          .$get('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json')
          .then((result) => {
            const array = []
            for (const key in result) {
              array.push(result[key])
            }
            context.commit('updateList', array)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },

    mutations: {
      setToken (state, payload) {
        state.token = payload
      },
      updateList (state, payload) {
        state.listBlog = payload
      }
    },
    getters: {
      getToken (state) {
        return state.token != null
      }
    }
  })
}
export default store
