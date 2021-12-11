<template>
  <div class="listAndAbout">
    <div class="list">
      <v-container>
        <span>Blog Me</span>
        <div class="post mt-16">
          <v-card width="700" flat class="item">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="https://albert-schilling.github.io/personal-website/2019-Portrait-Albert-Schilling-square-900px.a449945e.jpg"
                  loading="lazy"
                />
              </v-col>
              <v-col cols="6">
                <nuxt-link to="">
                  <v-card-title><h3>Amsterdam 101: Redefining The French Fries</h3></v-card-title>
                  <v-card-subtitle>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</v-card-subtitle>
                </nuxt-link>
                <v-divider />
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="post mt-16">
          <v-card width="700" flat class="item">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="https://albert-schilling.github.io/personal-website/2019-Portrait-Albert-Schilling-square-900px.a449945e.jpg"
                  loading="lazy"
                />
              </v-col>
              <v-col cols="6">
                <nuxt-link to="">
                  <v-card-title><h3>Amsterdam 101: Redefining The French Fries</h3></v-card-title>
                  <v-card-subtitle>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</v-card-subtitle>
                </nuxt-link>
                <v-divider />
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="post mt-16">
          <v-card width="700" flat class="item">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="https://albert-schilling.github.io/personal-website/2019-Portrait-Albert-Schilling-square-900px.a449945e.jpg"
                  loading="lazy"
                />
              </v-col>
              <v-col cols="6">
                <nuxt-link to="">
                  <v-card-title><h3>Amsterdam 101: Redefining The French Fries</h3></v-card-title>
                  <v-card-subtitle>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</v-card-subtitle>
                </nuxt-link>
                <v-divider />
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="post mt-16">
          <v-card width="700" flat class="item">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="https://albert-schilling.github.io/personal-website/2019-Portrait-Albert-Schilling-square-900px.a449945e.jpg"
                  loading="lazy"
                />
              </v-col>
              <v-col cols="6">
                <nuxt-link to="">
                  <v-card-title><h3>Amsterdam 101: Redefining The French Fries</h3></v-card-title>
                  <v-card-subtitle>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</v-card-subtitle>
                </nuxt-link>
                <v-divider />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </div>
    <div class="about">
      <v-container>
        <span>About Me</span>
        <div class="contentAbout">
          <v-img
            loading="lazy"
            src="https://albert-schilling.github.io/personal-website/2019-Portrait-Albert-Schilling-square-900px.a449945e.jpg"
            max-width="300"
            class="mt-16"
          />
        </div>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <nuxt-link to="/about" tag="a" class="mx-16">
          Read More >
        </nuxt-link>
      </v-container>
    </div>
  </div>
</template>
<style scoped>
.listAndAbout{
    width: 100%;
    display: flex;
    margin-top: 3rem;
}
.list{
    min-width: 60%;
    text-align: center;
}
.about{
    min-width: 40%;
    text-align: center;
    border-left: 1px solid black;
    /* display: flex; */
    /* justify-content: center; */
}
.contentAbout{
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin-bottom: 3rem;
}
.list{
}
.post {
  display: flex;
  justify-content: center;
}
.item {
    border: 1px solid black;
}
.item a{
    text-decoration: none;
    color:black;
}
span {
    font-size: 25px;
    font-family: 'Readex Pro', sans-serif;
    letter-spacing:0.4em;
}
.about a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #6f64ea;
}
</style>
