export const state = () => ({
  listBlog: []
})

export const actions = {
  async create_blog ({ dispatch, rootState, $router }, payload) {
    try {
      await this.$axios.$post(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs.json/?auth=' +
        rootState.auth.token,
        payload
        // {
        //   title: payload.title,
        //   description: payload.description,
        //   image: payload.image,
        //   author: payload.author
        // }
      )
      dispatch('get_data')
      $router.push('/admin/dashboard/post')
      // return console.log(result)
    } catch (error) {
      console.log(error)
    }
  },
  async delete_data ({ state, dispatch, rootState }, payload) {
    // console.log(payload)
    try {
      await this.$axios.$delete(
        'https://blognuxt-886ad-default-rtdb.firebaseio.com/blogs/' +
          payload +
          '.json/?auth=' +
          rootState.auth.token
      )
      dispatch('get_data')
    } catch (error) {
      console.log(error)
    }
  },
  async update_data ({ dispatch, rootState }, payload) {
    console.log(payload)
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
      dispatch('get_data')
    } catch (error) {
      // return {
      //   result: false,
      //   err: error
      // }
    }
  },
  async get_data ({ commit }) {
    await this.$axios
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
        commit('UPDATE_LIST', array)
        // console.log('get_data')
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
  },
  async change_favorite ({ dispatch, rootState }, payload) {
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
      dispatch('get_data')
    } catch (error) {
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
