<template>
  <div class="blogs">
    <div class="blog-list">
      <v-row>
        <v-col cols="12" class="col">
          <v-card
            v-for="(item, index) in listBlog"
            :key="index"
            rounded
            flat
            class="card-blog"
          >
            <nuxt-link :to="'/blogs/' + item.id">
              <v-img :src="item.image" contain class="image mx-1 my-1" />
              <!-- <div class="text"> -->
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>

              <v-card-text class="text">
                {{ item.description }}
              </v-card-text>
              <!-- </div> -->
            </nuxt-link>
          </v-card>
        </v-col>
        <!-- <v-col cols="6" class="col">
          <v-card
            v-for="(item, index) in listBlog"
            :key="index"
            rounded
            flat
            class="card-blog"
          >
            <nuxt-link :to="'/blogs/' + item.id">
              <v-img :src="item.image" contain class="image mx-1 my-1" />
              <div class="text">
                <v-card-title class="title">
                  {{ item.title }}
                </v-card-title>

                <v-card-text class="text">
                  {{ item.description }}
                </v-card-text>
              </div>
            </nuxt-link>
          </v-card>
        </v-col> -->
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('post', ['listBlog'])
  }
}
</script>
<style scoped>
.blogs {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.blog-list {
  max-width: 70%;
  /* display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px; */
}
.card-blog {
  border: 1px solid black;
  margin: 10px 0px;
  max-height: 500px;
  /* overflow: hidden;
  text-overflow: initial; */
}
.card-blog a {
  text-decoration: none;
  color: black;
}
.col {
  margin: 0px -7px;
  /* padding: 10px 0px; */
}
.image {
  max-height: 60%;
  max-height: 400px;
}
.text,
.title {
  /* width: 100%; */
  text-align: center;
  display: block;
  /* margin:auto; */
}
@media (max-width: 575px) {
  .blog-list {
    max-width: 100%;
  }
  .card-blog {
    border: 1px solid black;
    max-height: 500px;
  }
  .col {
    margin: 0px 0px;
  }
}

@media (min-width: 740px) {
}

@media screen and (min-width: 1024px) {
  .blogs {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
  .blog-list {
    max-width: 30%;
    /* display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px; */
  }
  .card-blog {
    border: 1px solid black;
    margin: 10px 0px;
    max-height: 500px;
    /* overflow: hidden;
  text-overflow: initial; */
  }
  .card-blog a {
    text-decoration: none;
    color: black;
  }
  .col {
    margin: 0px -7px;
    /* padding: 10px 0px; */
  }
  .image {
    max-height: 60%;
    max-height: 400px;
  }
  .text,
  .title {
    /* width: 100%; */
    text-align: center;
    display: block;
    /* margin:auto; */
  }
}
</style>
