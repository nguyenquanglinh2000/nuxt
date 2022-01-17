<template>
  <div class="blog_about_details my-16">
    <v-card flat class="blog_card_about">
      <v-img
        class="blog_img_about"
        loading="lazy"
        src="https://media.tuoitrexahoi.vn/mediav2/files/Tin-tuc-xa-hoi-moi-nhat-ngay-22-4-2020-Tin-moi-ve-ky-thi-THPT-quoc-gia-2020.jpg"
      />
      <v-card-title class="my-10 blog_title">
        <p>Hey! So Glad You're Here.</p>
      </v-card-title>
      <v-card-text >
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </v-card-text>
      <v-card-text>
        This is a great space to write a long text about your company and your
        services. You can use this space to go into a little more detail about
        your company. Talk about your team and what services you provide. Tell
        your visitors the story of how you came up with the idea for your
        business and what makes you different from your competitors. Make your
        company stand out and show your visitors who you are.
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.blog_about_details {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.blog_img_about {
  max-width: 100%;
}
.blog_card_about {
  max-width: 50%;
  border: 1px solid black;
}
.blog_card_about .blog_title p {
  font-size: 40px;
}
.v-card__text {
  color: black;
  line-height: 1.6em;
  font-size: 17px;
}
@media (max-width: 575px) {
  .blog_card_about {
    max-width: 100%;
    border: 1px solid black;
  }
  .blog_card_about .blog_title p {
    font-size: 25px;
  }
}

@media (min-width: 767px) {
  .blog_card-about {
    max-width: 100%;
    border: 1px solid black;
  }
  .blog_card-about .title p {
    font-size: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .blog_card-about {
    max-width: 80%;
    border: 1px solid black;
  }
  .blog_card-about .title p {
    font-size: 40px;
  }
}
</style>
