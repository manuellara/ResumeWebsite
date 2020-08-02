<template>
  <nav>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />

      <v-spacer></v-spacer>

      <!-- fab buttons -->
      <v-tooltip bottom v-for="(x, i) in buttons" :key="i">
        <template v-slot:activator="{ on }">
          <v-btn fab text :href="x.link" :target="x.target" v-on="on">
            <v-icon :color="x.color">{{ x.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ x.tooltip }}</span>
      </v-tooltip>

      <!-- 3 dots - logout button -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="black" icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="signOut">
            <v-list-item-icon>
              <v-icon color="black">mdi-{{ getProvider }}</v-icon>
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
        icon: "fab fa-facebook-f",
        target: "_blank",
        tooltip: "Facebook",
        color: "black"
      },
      {
        link: "https://github.com/manuellara",
        icon: "fab fa-github",
        target: "_blank",
        tooltip: "Github",
        color: "black"
      },
      {
        link: "https://medium.com/@manuellaraa",
        icon: "fab fa-medium-m",
        target: "_blank",
        tooltip: "Medium",
        color: "black"
      },
      {
        link: "mailto:manuellaraa@gmail.com?subject=Website Inquiry",
        icon: "mdi-email-outline",
        target: "_blank",
        tooltip: "Email",
        color: "black"
      },
    ],
  }),
  computed: {
    getProvider(){
      var provider = this.$store.getters.user.providerData[0].providerId
      return provider.replace(".com", "")
    }
  },
  methods: {
    signOut() {
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
