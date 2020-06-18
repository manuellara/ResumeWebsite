<template>
  <v-container fill-height>
    <v-row>

      <v-col align="center" cols="6">
        <v-row justify="center">

          <!-- profile picture -->
          <v-flex pa-2 sm12 md12>
            <v-avatar class="profile" size="200" >
              <v-img src="@/assets/profile.jpg" />
            </v-avatar>
          </v-flex>

          <!-- buttons -->
          <v-flex pa-2 sm12 md12 v-for="(item, i) in buttons" :key="i">
            <v-btn text large color="black">
              {{ item.title }}
            </v-btn>
          </v-flex>


          <!-- github calendar -->
          <v-flex pa-2 sm12 md12>
            <GithubCal />
          </v-flex>
          
        </v-row>
      </v-col>

    </v-row>

    <!-- if user is logged in -->
    <!-- <p>Display Name: {{userInfo.displayName}}</p>
    <p>Auth Provider: {{userInfo.providerData[0].providerId}}</p>
    <p>{{userInfo}}</p> -->
  </v-container>
</template>

<script>
import GithubCal from "../components/GithubCal";


export default {
  components: {
    GithubCal,
  },
  data: () => ({
    buttons: [
      { title: "About", link: "" },
      { title: "Education", link: "" },
      { title: "Experience", link: "" },
      { title: "Contact", link: "" },
    ],
  }),
  methods: {
    //
  },
  computed: {
    // returns logged in user info
    userInfo() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped></style>
