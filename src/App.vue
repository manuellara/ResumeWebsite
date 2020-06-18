<template>
  <v-app>
    <Navbar v-if="this.$store.state.user != null"/>

    <v-main>
      <router-view />
    </v-main>

    <Footer v-if="this.$store.state.user != null"/>
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
  data: () => ({
    //
  }),
};
</script>

<style>
</style>
