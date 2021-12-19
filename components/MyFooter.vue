<template>
  <div class="ft">
    <v-footer color="#ffff">
      <v-form @submit.prevent="">
        <v-row>
          <v-col cols="6">
            <v-text-field label="First Name" color="pink" />
          </v-col>
          <v-col cols="6">
            <v-text-field label="Last Name" color="pink" />
          </v-col>
        </v-row>
        <v-text-field label="Email *" color="pink" />
        <v-textarea placeholder="Message" no-resize rows="5" color="pink" />
        <v-btn type="submit" width="250" height="100" color="pink" outlined>
          Subcribe
        </v-btn>
      </v-form>
    </v-footer>
  </div>
</template>
<style scoped>
.ft{
    border-block-start: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;
}
.ft form{
    margin: 8rem ;
    min-width: 800px;
    text-align: center;
}
</style>
