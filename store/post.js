export const state = () => ({
  listBlog: []
})

export const actions = {
  async createBlog ({ dispatch, rootState, $router }, payload) {
    try {
      await this.$axios.$post(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json/?auth=' +
          rootState.auth.token,
        payload
      )
      dispatch('getData')
      $router.push('/admin/post')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  async deleteData ({ state, dispatch, rootState }, payload) {
    // console.log(payload)
    try {
      await this.$axios.$delete(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' +
          payload +
          '.json/?auth=' +
          rootState.auth.token
      )
      dispatch('getData')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  async updateData ({ dispatch, rootState }, payload) {
    try {
      await this.$axios.$patch(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' +
          payload.id +
          '.json/?auth=' +
          rootState.auth.token,
        // {
        payload
        // title: payload.title,
        // description: payload.description,
        // image: payload.image
      )
      dispatch('getData')
    } catch (error) {
      // return {
      //   result: false,
      //   err: error
      // }
    }
  },
  async getData ({ commit }) {
    try {
      const arr = await this.$axios.$get(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json'
      )

      console.log(arr)
      // => return obj
      // {
      //   id:{
      //     value
      //   }
      // }

      const temp = []
      for (const id in arr) {
        // console.log(arr[id])
        // Trả về obj
        temp.push({ id, ...arr[id] })
      }
      commit('UPDATE_LIST', temp)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    // this.$axios
    //   .$get('https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json')
    //   .then((result) => {
    //     const array = []
    //     for (const key in result) {
    //       // console.log(result[key].title)
    //       array.push({
    //         title: result[key].title,
    //         description: result[key].description,
    //         image: result[key].image,
    //         favorite: result[key].favorite,
    //         author: result[key].author,
    //         id: key
    //       })
    //     }
    //     // console.log(array)
    //     commit('UPDATE_LIST', array)
    //     // console.log('getData')
    //   })
    //   .catch((e) => {
    //     // eslint-disable-next-line no-console
    //     console.log(e)
    //   })
  },
  async changeFavorite ({ dispatch, rootState }, payload) {
    try {
      await this.$axios.$patch(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' +
          payload.id +
          '.json/?auth=' +
          rootState.auth.token,
        {
          favorite: !payload.favorite
        }
      )
      dispatch('getData')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

export const mutations = {
  UPDATE_LIST (state, payload) {
    state.listBlog = payload
  }
}

export const getters = {}
