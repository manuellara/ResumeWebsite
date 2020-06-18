<template>
  <v-list flat>
    <v-list-item-group value="true" color="primary">
      <v-subheader class="black--text">Projects</v-subheader>

      <v-list-item v-for="(x, i) in platformData" :key="i" :href="x.link" :target="x.target">
        <v-list-item-icon>
          <v-icon color="black" v-text="x.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="x.project" />
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
        icon: "mdi-github",
        project: "Graduate Project",
        link: "https://github.com/manuellara/CSUDHGraduateProject",
        target: "_blank"
      },
      {
        icon: "mdi-web",
        project: "LaraHRR",
        link: "https://larahrr.com",
        target: "_blank"
      },
    ],
  }),
};
</script>

<style scoped>
</style>
