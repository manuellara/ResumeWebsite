<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center" cols="12">

        <p>
          Please login to view <b>Manuel Lara</b>'s personal website
        </p>
        
        <!-- login with Google -->
        <v-layout row>
          <v-flex>
            <!-- login with Google -->
            <v-btn large class="ma-2" outlined @click="googleSignIn">
              <v-icon left dark>mdi-google</v-icon>
              Google
            </v-btn>
          </v-flex>
        </v-layout>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  methods: {
    // Google sign-in dispatcher
    googleSignIn() {
      this.$store.dispatch("signIn");
    },
  }
};
</script>

<style scoped></style>
