<template>
  <!-- <v-card> -->
  <div class="nav_bar">
    <intro />
    <v-toolbar height="120" flat>
      <div class="nav">
        <ul>
          <li style="border-left: 1px solid black;">
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
            <nuxt-link tag="a" to="/profile">
              Contact
            </nuxt-link>
          </li>
          <li>
            <v-text-field placeholder="Search..." color="pink" prepend-icon="mdi-magnify" hide-details />
          </li>
          <contact />
        </ul>
      </div>
    </v-toolbar>
  <!-- </v-card> -->
  </div>
</template>
<style scoped>
.nav{
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
  border-right: 1px solid black;
}
a:hover {
  color: mediumpurple;
}
a.nuxt-link-exact-active {
  color: mediumpurple;
}
</style>
