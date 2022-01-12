<template>
  <v-footer color="#ffff">
    <div class="ft">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field label="First Name" color="pink" /> <v-spacer />
          </v-col>
          <v-col>
            <v-text-field label="Last Name" color="pink" />
          </v-col>
        </v-row>
        <v-text-field label="Email *" color="pink" />
        <v-textarea placeholder="Message" no-resize rows="5" color="pink" />
        <v-btn width="250" height="100" color="pink" class="submitButton" outlined>
          Subcribe
        </v-btn>
      </v-container>
    </div>
  </v-footer>
</template>
<style scoped>
.ft {
  border-block-start: 1px solid black;
  width: 100%;
  text-align: center;
}
@media (max-width: 575px) {

}

@media (min-width: 740px) {
}

@media screen and (min-width: 1024px) {
}
</style>
