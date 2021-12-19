import Vuex from 'vuex'
const store = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      listBlog: [],
      token: null,
      // token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3OTg5ZTU4ZWU1ODM4OTgzZDhhNDQwNWRlOTVkYTllZTZmNWVlYjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmxvZ251eHQtODg2YWQiLCJhdWQiOiJibG9nbnV4dC04ODZhZCIsImF1dGhfdGltZSI6MTYzODk1MDQwOCwidXNlcl9pZCI6IndoMnR3T2x5VlllNWxPY3o1VEFsV3NtUDByTDIiLCJzdWIiOiJ3aDJ0d09seVZZZTVsT2N6NVRBbFdzbVAwckwyIiwiaWF0IjoxNjM4OTUwNDA4LCJleHAiOjE2Mzg5NTQwMDgsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DJlDLO3afAtEuWWwP2uQPGXCQLpieQU5n-j0wd6uxuzaqbKYY_8xrHb2Il5lyLYaD8usTMiURziU4Mue8BwbnYXAXC72ctdSeNTvwDGUpWgs3cWM-v9YaXbq4TdLxYqrZXKDfbWjcE1T06H6dxpfOSJwldwphShZ9GttfSklu581H9Epm7vh-q9937WArpACucau6bTYGBX3KUQ51oQvxQWtRZOg5vKf32DwpKf16mDYW0-FMaitZ2idGrslM2F9hpm6-4LCakpGFsT8iOCU8qrJkCaTIBtyzALmI6jywqdLb_ZvDmhuWtiCLy1P2VLm0eIf-Ejfz3WX8aZFG30Fqg',
      emailAuth: ''
    },
    actions: {
      async authenticate (context, payload) {
        // return new Promise((resolve, reject) => {
        //   let apiAuth =
        //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
        //   if (payload.isLogin) {
        //     apiAuth =
        //       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
        //   }
        //   this.$axios
        //     .$post(apiAuth, {
        //       email: payload.email,
        //       password: payload.password,
        //       returnSecureToken: true
        //     })
        //     .then((result) => {
        //       // console.log(result.email)
        //       context.commit('getAuth', result.email)
        //       context.commit('SET_TOKEN', result.idToken)
        //       resolve({ success: true })
        //     })
        //     .catch((error) => {
        //       reject(error)
        //     })
        // })
        let apiAuth =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
        if (payload.isLogin) {
          apiAuth =
              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ3BZyypt-Rsmn49D9I0aMU8p7DygCWnI'
        }
        try {
          const result = await this.$axios
            .$post(apiAuth, {
              email: payload.email,
              password: payload.password,
              returnSecureToken: true
            })
          context.commit('GET_AUTH', result.email)
          context.commit('SET_TOKEN', result.idToken)
          return true
          // return console.log(result)
        } catch (error) {
          return false
        }
      },
      async create_blog (context, payload) {
        try {
          await this.$axios
            .$post(
              'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json/?auth=' +
              context.state.token,
              {
                title: payload.title,
                description: payload.description,
                image: payload.image,
                author: payload.author
              }
            )
          context.dispatch('get_data')
          return {
            check: true,
            alert: 'Create success'
          }
          // return console.log(result)
        } catch (error) {
          return {
            check: false,
            alert: 'Create false ' + error
          }
        }
      },
      async delete_data (context, payload) {
        // console.log(payload)
        try {
          await this.$axios.$delete('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' + payload + '.json/?auth=' +
          context.state.token)
          context.dispatch('get_data')
          return {
            result: true
          }
        } catch (error) {
          return {
            result: false,
            err: error
          }
        }
      },
      async update_data (context, payload) {
        try {
          await this.$axios.$patch('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' + payload.id + '.json/?auth=' +
          context.state.token, {
            title: payload.title,
            description: payload.description,
            image: payload.image
          })
          context.dispatch('get_data')
          return {
            result: true
          }
        } catch (error) {
          return {
            result: false,
            err: error
          }
        }
      },
      get_data (context) {
        return this.$axios
          .$get('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json')
          .then((result) => {
            const array = []
            for (const key in result) {
              // console.log(result[key].title)
              array.push({
                title: result[key].title,
                description: result[key].description,
                image: result[key].image,
                favorite: result[key].favorite,
                author: result[key].author,
                id: key
              })
            }
            // console.log(array)
            context.commit('UPDATE_LIST', array)
            console.log('get_data')
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      logout ({ commit }) {
        commit('LOGOUT')
        this.$router.push('/login')
      },
      async change_favorite (context, payload) {
        try {
          await this.$axios.$patch('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' + payload.id + '.json/?auth=' +
          context.state.token, {
            favorite: !payload.favorite
          })
          context.dispatch('get_data')
          return {
            result: true
          }
        } catch (error) {
          return {
            result: false,
            err: error
          }
        }
      }
    },

    mutations: {
      SET_TOKEN (state, payload) {
        state.token = payload
      },
      UPDATE_LIST (state, payload) {
        state.listBlog = payload
      },
      LOGOUT (state) {
        state.token = null
      },
      GET_AUTH (state, payload) {
        state.emailAuth = payload
      }
    },
    getters: {
      // blogAuth (state) {
      //   return state.listBlog.filter((blog) => {
      //     return blog.author === state.emailAuth
      //   })
      // }
    }
  })
}
export default store
