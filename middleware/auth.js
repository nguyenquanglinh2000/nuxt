export default function ({ store, redirect }) {
  if (store.state.auth.token === null) {
    redirect('/login')
  }
  console.log('middleware: ', store.state.auth.token)
}
