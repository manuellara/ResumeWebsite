<template>
  <v-container fill-height>
    <!-- ROW wrapping everyhting -->
    <v-row justify="center">

      <!-- column 1 as flex -->
      <v-flex xs12 sm12 md5>

          <!-- column to center align everything -->
          <v-col align="center">
            <!-- profile picture -->
            <v-flex pa-2 xs12 sm12 md12>
              <v-avatar class="profile" size="250">
                <v-img src="@/assets/profile.jpg" />
              </v-avatar>
            </v-flex>

            <!-- discription -->
            <v-flex pa-2 sm12 md12>
              <h1>Manuel Lara</h1>
              <h6>IT Professional / Software Developer</h6>
            </v-flex>

            <!-- chips -->
            <v-flex pa-2 sm12 md12>
              <v-chip class="ma-2" :color="item.color" outlined   v-for="(item, i) in chips" :key=i>
                <v-icon left>{{item.icon}}</v-icon>
                {{item.src}}
              </v-chip>
            </v-flex>

            <!-- github calendar -->
          <v-flex pa-2 sm12 md12>
            <GithubCal />
          </v-flex>
          </v-col>
          
      </v-flex>


      <!-- column 2 as flex -->
      <v-flex xs10 sm12 md7>
        <!-- column to center align everything -->
        <v-col align="center">
          <!-- flex row -->
          <v-flex row pa-2 sm12 md12>
            <!-- cards -->
            <v-flex pa-2 sm12 md6  v-for="(x, i) in 4" :key="i">
              <Cards />
            </v-flex>
          </v-flex>
        </v-col>
      </v-flex>
      
    </v-row>
  </v-container>
</template>

<script>
import GithubCal from "../components/GithubCal";
import Cards from "../components/Cards";

export default {
  components: {
    GithubCal,
    Cards
  },
  data: () => ({
    chips: [
      { icon: 'mdi-map-marker-radius', color: 'black', src: 'Los Angeles, CA' },
      { icon: 'mdi-cellphone-iphone', color: 'black', src: '(310) 408-0117' },
      { icon: 'mdi-gmail', color: 'black', src: 'manuellaraa@gmail.com' },
      { icon: 'mdi-github', color: 'black', src: 'manuellara' },
    ],
  }),
  methods: {
    //
  }
};
</script>

<style scoped>
</style>
