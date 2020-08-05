<template>
<v-flex pa-2 xs12 sm12 md12>
  <v-card outlined>

    <!-- card title -->
    <v-card-title>
        <v-row justify="center">
            <span class="display-1">
                {{ data.title }}
            </span>
        </v-row>
    </v-card-title>

    <!-- card body -->
    <v-card-text>
        <v-flex pa-2 xs12 sm12 md9 v-for="(item, i) in data.items" :key="i">
          <Blogpost :item="item" />
        </v-flex>
    </v-card-text>

  </v-card>
</v-flex>
</template>

<script>
import Blogpost from "../components/Blogpost";

export default {
  components: {
    Blogpost,
  },
  props: ["data"],
  data: () => ({
     //
  })
};
</script>

<style scoped></style>
