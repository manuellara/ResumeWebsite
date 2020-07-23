<template>
  <v-app>
    <Navbar v-if="userInfo != null"/>

    <v-main>
      <router-view />
    </v-main>

    <Footer v-if="userInfo != null"/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    // returns logged in user info
    userInfo() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>

</style>
