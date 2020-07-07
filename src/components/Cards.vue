<template>
    <v-card class="rounded-xl">

      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-subtitle class="textAlignLeft">
        {{ card.body }}
      </v-card-subtitle>

      <v-card-actions>

        <v-tooltip bottom  v-for="(subCard, x) in card.technologies" :key="x">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="black">{{ subCard.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ subCard.name }}</span>
        </v-tooltip>

      </v-card-actions>

    </v-card>
</template>
<script>
export default {
  props: ['card'],
  data: () => ({
    //
  }),
}
</script>

<style type="text/css">
.textAlignLeft {
  text-align:left;
}
</style>
