<template>
  <div class="blog_nav_bar">
    <v-toolbar height="120" class="blog_nav_all" flat>
      <div class="blog_nav">
        <ul>
          <li>
            <nuxt-link tag="a" to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/about">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/blogs">
              MyBlog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/#follow">
              Contact
            </nuxt-link>
          </li>
          <li>
            <v-text-field
              placeholder="Search..."
              color="pink"
              prepend-icon="mdi-magnify"
              hide-details
              height="30"
              class="my-2"
            />
          </li>
        </ul>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.blog_nav {
  min-width: 100%;
  /* background: rgb(200, 200, 200); */
}
ul {
  list-style-type: none;
  text-align: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}
li {
  display: inline-block;
  border-left: 1px solid black;
  /* width: 120px; */
  /* height: 40px; */
  /* line-height: 40px; */
  /* margin-left: -5px; */
}
ul li a {
  text-decoration: none;
  color: black;
  display: block;
  font-size: 20px;
  padding: 10px 50px;
}
a:hover {
  color: mediumpurple;
}
a.nuxt-link-exact-active {
  color: mediumpurple;
}
/* @media (max-width: 1199px) {
} */

@media (max-width: 575px) {
  .blog_nav_bar .blog_nav_all {
    display: none;
  }
}

@media (min-width: 740px) {
  ul li a {
    text-decoration: none;
    color: black;
    display: block;
    font-size: 15px;
    padding: 5px 25px;
  }
}

@media screen and (min-width: 1024px) {
  ul li a {
    text-decoration: none;
    color: black;
    display: block;
    font-size: 20px;
    padding: 10px 50px;
  }
}
</style>
