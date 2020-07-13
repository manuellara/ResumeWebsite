<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center">

        <Signin />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Signin from "@/components/Signin";

export default {
  components: {
    Signin,
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
};
</script>

<style scoped></style>
