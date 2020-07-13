<template>
  <v-list flat>
    <v-list-item-group value="true" color="primary">
      <v-subheader class="black--text">Navigation</v-subheader>

      <v-list-item v-for="(x, i) in platformData" :key="i" :href="x.link" :target="x.target" router-link :to="x.route">
        <v-list-item-icon>
          <v-icon color="black" v-text="x.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="x.title" />
        </v-list-item-content>
      </v-list-item>
      
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    platformData: [
      {
        icon: "mdi-home",
        title: "Home",
        route: "/home"
      },
      {
        icon: "mdi-web",
        title: "LaraHRR",
        link: "https://larahrr.com",
        target: "_blank"
      },
    ],
  }),
};
</script>

<style scoped>
</style>
