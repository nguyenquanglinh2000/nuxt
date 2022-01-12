<template>
  <div class="subscribe">
    <div class="text">
      <span>Never Miss a New Post.</span>
    </div>
    <v-spacer />
    <div class="sub">
      <v-text-field placeholder="Subscribe" color="pink" label="Email" />
      <v-btn
        class="ml-16"
        color="pink"
        outlined
        min-width="150"
        min-height="50"
      >
        Subscribe
      </v-btn>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
.subscribe {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  border-block-end-width: 1px solid black;
  border-block-start-color: 1px solid black;
}
span {
  font-size: 38px;
  font-family: 'Playfair Display', serif;
}
/* button{
    color: #ffff;
    background-color: #6f64ea;
    width: 140px;
    height: 50px;
} */
.sub {
  margin: 3rem 3rem;
  /* width: 500px; */
  display: flex;
  margin-right: 18%;
}
.text {
  margin: 3rem 3rem;
  margin-left: 18%;
}

@media (max-width: 575px) {
  .sub {
    /* margin: 3rem 3rem; */
    /* width: 500px; */
    /* margin-right: 18%; */
    display: block;

  }
  .text span {
    font-size: 25px;
    /* margin: 3rem 3rem; */
    /* margin-left: 18%; */
  }
  .subscribe {
    display: block;
    max-width: 100%;
  }
}

@media (min-width: 740px) {
}

@media screen and (min-width: 1024px) {
  .subscribe {
    display: block;
    /* text-align: center; */
  }
  .sub {
    margin: auto;
  }
}
</style>
