<template>
  <v-card elevation="8" class="rounded-xl" height="40vh">
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="card.image">
      
      <v-card-title>
        {{ card.title }}
      </v-card-title>
      
    </v-img>

    <v-card-text class="textAlignLeft"> 
      <ul>
        <li  v-for="(item, i) in card.items" :key="i">
          {{ item.src }}
        </li>
      </ul>
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
