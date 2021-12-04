<template>
  <v-card flat>
    <v-toolbar>
      <div class="nav">
        <ul>
          <li>
            <nuxt-link tag="a" to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/blogs">
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/profile">
              Profile
            </nuxt-link>
          </li>
        </ul>
      </div>
    </v-toolbar>
  </v-card>
</template>
<style scoped>
.nav{
    min-width: 100%;
}
ul {
  list-style-type: none;
  text-align: center;
}
li {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin-left: -5px;
}
ul li a {
  text-decoration: none;
  color: black;
  display: block;
  font-size: 30px;
}
a:hover {
  background: #F1F1F1;
}
</style>
