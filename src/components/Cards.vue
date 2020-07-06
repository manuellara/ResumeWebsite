<template>
  <div>
    <v-card class="rounded-xl">

      <v-card-title>Graduate Project</v-card-title>
      <v-card-subtitle class="textAlignLeft">
        Demonstrating 2 factor authentication via facial recognition
      </v-card-subtitle>

      <v-card-actions>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="black">mdi-nodejs</v-icon>
            </v-btn>
          </template>
          <span>NodeJS</span>
        </v-tooltip>

        <v-btn icon>
          <v-icon>mdi-vuejs</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-vuetify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-firebase</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-aws</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-language-python</v-icon>
        </v-btn>
      </v-card-actions>

    </v-card>
  </div>
</template>

<style type="text/css">
.textAlignLeft {
  text-align:left;
}
</style>
