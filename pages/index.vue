<template>
  <div class="banner">
    <v-img src="https://nuxtstack.org/banner.png" />
  </div>
</template>
<script>
export default {
  layout: 'layoutHome'
}
</script>
<style scoped>
.banner{
  display: flex;
  justify-content: center;
  border: 10px solid black;
}
@media (max-width: 575px) {

}

@media (max-width: 767px) {

}

@media (max-width: 991px) {
  .nav .contact_icon{
    display:  none;
  }
  .sub{
    display: none;
  }
}

@media (max-width: 1199px) {

}
</style>
