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
            <v-flex pa-2 sm12 md6  v-for="(item, i) in projectCards" :key="i">
              <Cards :card="item" />
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
    projectCards: [
      { 
        title: 'Graduate Project',
        body: 'Demonstrating 2 factor authentication via facial recognition',
        technologies: [
          { icon: 'mdi-nodejs', name: 'Node JS' },
          { icon: 'mdi-vuejs', name: 'Vue JS' },
          { icon: 'mdi-vuetify', name: 'Vuetify' },
          { icon: 'mdi-firebase', name: 'Firebase' },
          { icon: 'mdi-aws', name: 'AWS' },
          { icon: 'mdi-language-python', name: 'Python' },
        ],
      },
      { 
        title: 'Resume Webiste',
        body: 'A website to showcase my development skills as well as my career accomplishments',
        technologies: [
          { icon: 'mdi-nodejs', name: 'Node JS' },
          { icon: 'mdi-vuejs', name: 'Vue JS' },
          { icon: 'mdi-vuetify', name: 'Vuetify' },
          { icon: 'mdi-firebase', name: 'Firebase' },
        ],
      },
      { 
        title: 'AWS Lambda function to blur faces',
        body: 'This python function uses Rekognition to identify faces and Pillow to blur them.',
        technologies: [
          { icon: 'mdi-aws', name: 'AWS' },
          { icon: 'mdi-language-python', name: 'Python' },
        ],
      },
      { 
        title: 'CSUDH Masters Projects',
        body: 'This repo contains 2 projects showcasing ETL and data analysis on a Kaggle dataset and .pcap file.',
        technologies: [
          { icon: 'mdi-google-spreadsheet', name: 'Google Sheets' },
          { icon: 'mdi-language-python', name: 'Python' },
          { icon: 'mdi-database', name: 'SQLite' },
          { icon: 'mdi-npm', name: 'Other libraries' },
        ],
      },
    ],
  }),
  methods: {
    //
  }
};
</script>

<style scoped>
</style>
