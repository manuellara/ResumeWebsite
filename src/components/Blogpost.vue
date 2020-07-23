<template>
  <v-card rounded="xl" elevation="8" class="textAlignLeft" id="app">

    <v-list-item three-line>

      <v-list-item-content>
        <div class="overline mb-4">{{ convertTime( article.created ) }}</div>
        <v-list-item-title class="headline mb-1">{{ article.title }}</v-list-item-title>
        <v-list-item-subtitle>
            {{ article.author }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <!-- profile pic --> 
      <v-avatar size="80">
        <v-img :src="profilepic" />
      </v-avatar>

    </v-list-item>


    <v-card-actions>

      <v-btn rounded text>Quick View</v-btn>
      <v-btn rounded text>See Article</v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>
import moment from 'moment';

export default {
    props: ['article', 'profilepic'],
    data: () => ({
      //
    }), 
    methods: {
      convertTime(date){
        return moment(date).format("MMM DD , YYYY")
      }
    }
}
</script>
<style scoped>
.textAlignLeft {
  text-align: left;
}

</style>
