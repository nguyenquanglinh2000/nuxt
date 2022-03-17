export default function ({ store, redirect }) {
  if (store.state.auth.token === null) {
    store.dispatch('post/getData')
    redirect('/login')
  }
  // console.log('middleware: ', store.state.auth.token)
}
