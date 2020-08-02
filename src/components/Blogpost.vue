<template>
  <v-card rounded="xl" outlined >

    <v-list-item three-line>
      <v-list-item-content>

        <div class="overline">{{ convertTime( item.created ) }}</div>
        <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>
            {{ item.author }}
        </v-list-item-subtitle>

      </v-list-item-content>
    </v-list-item>

    <v-row justify="center">
      <v-card-actions>
        <v-btn text @click="goToLink(item.url)">Link</v-btn>

        <!-- dialog -->
        <v-dialog v-model="dialog" width="50%">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              Quick View
            </v-btn>
          </template>
          <v-card>
            <v-card-text v-html="item.content" />
          </v-card>
        </v-dialog> 

      </v-card-actions>
    </v-row>

  </v-card>
</template>

<script>
import moment from 'moment';

export default {
    props: ['item'],
    data: () => ({
      dialog: false,
    }), 
    methods: {
      convertTime(date){
        return moment(date).format("MMM DD , YYYY")
      },
      goToLink(link){
        // will split query string and pass in the url
        link = link.split("?source=")
        window.open(link[0], "_blank")
      },
    }
}
</script>
<style scoped>
.textAlignLeft {
  text-align: left;
}

</style>
