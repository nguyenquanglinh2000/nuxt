export default function (context) {
  if (!context.store.getters.getToken) {
    context.redirect('/login')
  }
}
