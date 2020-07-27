<template>
  <v-card rounded="xl" elevation="8" class="textAlignLeft pa-3">

    <v-list-item three-line>

      <v-list-item-content>

        <div class="overline">{{ convertTime( article.created ) }}</div>
        <v-list-item-title class="headline mb-1">{{ article.title }}</v-list-item-title>

        <v-list-item-subtitle>
            {{ article.author }}
        </v-list-item-subtitle>

      </v-list-item-content>


    </v-list-item>

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
