<template>
    <v-card class="rounded-lg">

      <v-card-title>
        <v-icon large left>
          {{ card.icon }}
        </v-icon>
        {{ card.title }}
      </v-card-title>

      <v-card-text class="textAlignLeft headline font-weight-bold">
        {{ card.body }}
      </v-card-text>

      <v-card-actions>

        <v-btn text rounded>
          Read More..
        </v-btn>

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

<style scoped>
.textAlignLeft {
  text-align:left;
}
</style>
