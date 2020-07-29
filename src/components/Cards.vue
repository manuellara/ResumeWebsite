<template>
  <v-card elevation="8" class="rounded-xl" height="400px"> 
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="card.image">

      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      
      <v-card-title>
        {{ card.title }}
      </v-card-title>
      
    </v-img>

    <v-card-text class="textAlignLeft"> 

      <v-list-item two-line>
        <v-list-item-content>
          <div class="py-1" v-for="(item, i) in card.items" :key="i">
            <v-list-item-title>
              {{ item.location }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.src }}
            </v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>

    </v-card-text>

  </v-card>
</template>
<script>
export default {
  props: ["card"],
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.textAlignLeft {
  text-align: left;
}
</style>
