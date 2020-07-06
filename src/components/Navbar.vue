<template>
  <nav>
    <v-app-bar app color="white" light elevate-on-scroll>
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />

      <v-spacer></v-spacer>

      <v-tooltip bottom v-for="(x, i) in buttons" :key="i">
        <template v-slot:activator="{ on }">
          <v-btn :color="x.color" icon :href="x.link" :target="x.target" v-on="on">
            <v-icon>{{ x.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ x.tooltip }}</span>
      </v-tooltip>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="black" icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="googleSignOut">
            <v-list-item-icon>
              <v-icon color="black">mdi-google</v-icon>
            </v-list-item-icon>
            <v-list-item-title>sign-out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <Drawerlist />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Drawerlist from "./Drawerlist";

export default {
  components: {
    Drawerlist,
  },
  data: () => ({
    drawer: null,
    date: new Date(),
    buttons: [
      {
        link: "https://facebook.com/manuellaraaa",
        icon: "mdi-facebook",
        target: "_blank",
        tooltip: "Facebook",
        color: "black"
      },
      {
        link: "https://github.com/manuellara",
        icon: "mdi-github",
        target: "_blank",
        tooltip: "Github",
        color: "black"
      },
      {
        link: "mailto:manuellaraa@gmail.com?subject=Website Inquiry",
        icon: "mdi-gmail",
        target: "_blank",
        tooltip: "Email",
        color: "black"
      },
    ],
  }),
  methods: {
    googleSignOut() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");

#heading {
  font-family: Fugaz One;
  color: grey;
  font-size: 20px;
}

.title {
  cursor: pointer;
}
</style>
