<template>
  <v-container fill-height>
    <!-- ROW wrapping everyhting -->
    <v-row justify="center">

      <!-- column 1 as flex -->
      <v-flex xs12 sm12 md5>

        <!-- profile picture -->
        <v-flex class="text-center" pa-2 xs12 sm12 md12>
          <v-avatar class="profile" size="250">
            <v-img src="@/assets/profile.jpg" />
          </v-avatar>
        </v-flex>

        <!-- discription -->
        <v-flex class="text-center" pa-2 xsm12 sm12 md12>
          <h1 class="display-1">Manuel Lara</h1>
          <h6>IT Professional / Software Developer</h6>
        </v-flex>

        <!-- fab buttons -->
        <v-flex class="text-center" pa-2 sm12 md12>
          <v-tooltip bottom v-for="(x, i) in buttons" :key="i">
            <template v-slot:activator="{ on }">
              <v-btn class="mx-2" fab outlined :color="x.color" :href="x.link" :target="x.target" v-on="on">
                <v-icon>{{ x.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ x.tooltip }}</span>
          </v-tooltip>
        </v-flex>

        <!-- apexchart -->
        <v-flex pa-2 xs12 sm12 md12>
          <Apexchart />
        </v-flex>
          
      </v-flex>


      <!-- column 2 as flex -->
      <v-flex xs10 sm12 md7>
        <!-- column to center align everything -->
        <v-col align="center">

          <!-- flex row -->
          <v-flex row pa-2 sm12 md12>

            <!-- cards -->
            <v-flex pa-4 xs12 sm12 md4  v-for="(item, i) in projectCards" :key="i">
              <Cards :card="item" />
            </v-flex>

            <!-- github calendar -->
            <v-flex pa-2 xs12 sm12 md12>
              <GithubCal />
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
import Apexchart from "../components/Apexchart";

import RssToJson from '@/services/RssToJson'

export default {
  components: {
    GithubCal,
    Cards,
    Apexchart,
  },
  data: () => ({
    data: null,
    projectCards: [
      { 
        title: 'Education',
        image: "https://images.collegexpress.com/blog/pros-cons-online-college-education.jpg",
        items: [
          { location: "CSU Dominguez Hills | 2018-20" , src: "Masters in Cyber Security" },
          { location: "El Camino College | 2017" , src: "Certificate in Computer Science" },
          { location: "CSU Dominguez Hills | 2009-15" , src: "Bachelors in Computer Technology" },
        ]
      },
      { 
        title: 'Skills',
        image: "https://s30776.pcdn.co/wp-content/uploads/2020/04/AdobeStock_305233591.jpeg",
        items: [
          { location: "Technical Support" },
          { location: "Customer Service" },
          { location: "Troubleshooting/problem solving" },
          { location: "Web Development" },
          { location: "Project Managment" },
        ]
      },
      { 
        title: 'Employment',
        image: "https://cdn-59bd6cf5f911c923e82ee0ee.closte.com/hr/wp-content/uploads/sites/19/2019/05/DSC0173.jpg",
        items: [
          { location: "Inglewood USD | 2019-Present" , src: "Applications Support Technician" },
          { location: "Inglewood USD | 2018-2019" , src: "Computer Technician" },
          { location: "In-N-Out | 2010-Present" , src: "Associate" },
        ]
      },
    ],
    buttons: [
      {
        link: "https://facebook.com/manuellaraaa",
        icon: "fab fa-facebook-f",
        target: "_blank",
        tooltip: "Facebook",
        color: "black"
      },
      {
        link: "https://github.com/manuellara",
        icon: "fab fa-github",
        target: "_blank",
        tooltip: "Github",
        color: "black"
      },
      {
        link: "https://medium.com/@manuellaraa",
        icon: "fab fa-medium-m",
        target: "_blank",
        tooltip: "Medium",
        color: "black"
      },
      {
        link: "mailto:manuellaraa@gmail.com?subject=Website Inquiry",
        icon: "mdi-gmail",
        target: "_blank",
        tooltip: "Email",
        color: "black"
      },
    ],
  }),
  mounted() {

    // API call
    RssToJson.rsstojson().then(result => {
      console.log(result.data)
    });

  }
};
</script>

<style scoped>
</style>
