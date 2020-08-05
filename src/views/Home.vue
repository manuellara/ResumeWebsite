<template>
  <v-container>
    <!-- ROW wrapping everyhting -->
    <v-row justify="center">

      <!-- column 1 as flex -->
      <v-flex xs12 sm12 md7>

        <!-- column to center align everything -->
        <v-col align="center">

          <!-- card, profile pic, and discription -->
          <Header />
          

          <v-divider class="mt-6"/>

          <!-- tabs -->
          <v-tabs class="py-5" centered color="black" v-model="tabs">

            <!-- 1st tab -->
            <v-tab>
              {{ 'Overview' }}
            </v-tab>
            <v-divider vertical inset/>

            <!-- 2nd tab -->
            <v-tab>
              {{ 'About' }}
            </v-tab>
            <v-divider vertical inset/>

            <!-- 3rd tab -->
            <v-tab>
              {{ 'Github' }}
            </v-tab>
            <v-divider vertical inset/>

            <!-- 4th tab -->
            <v-tab>
              {{ 'Blog' }}
            </v-tab>

          </v-tabs>




          <v-tabs-items v-model="tabs">

            <!-- 1st tab item -->
            <v-tab-item >
              <v-flex row xs12 sm12 md12>

                <!-- cards -->
                <Cards ref="cards" v-for="(item, i) in projectCards" :key="i"   :card="item" />

                <!-- github calendar -->
                <GithubCal />

                <!-- blog -->
                <Blog v-if="response == true" :data="data"/>

              </v-flex>
            </v-tab-item>

            <!-- 2nd tab item -->
            <v-tab-item >
              <v-flex row xs12 sm12 md12>

                <!-- cards -->
                <Cards v-for="(item, i) in projectCards" :key="i"   :card="item" />

              </v-flex>
            </v-tab-item>

            <!-- 3rd tab item -->
            <v-tab-item >
              <v-flex row xs12 sm12 md12>

                <!-- github calendar -->
                <GithubCal />

              </v-flex>
            </v-tab-item>

            <!-- 4th tab item -->
            <v-tab-item >
              <v-flex row xs12 sm12 md12>
                <!-- blog -->
                <Blog v-if="response == true" :data="data"/>
              </v-flex>
              
            </v-tab-item>

          </v-tabs-items>


        </v-col>
        
      </v-flex>

    </v-row>
  </v-container>
</template>

<script>
import GithubCal from "../components/GithubCal";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Blog from "../components/Blog";


// API method
import RssToJson from '@/services/RssToJson'

export default {
  components: {
    GithubCal,
    Header,
    Cards,
    Blog,
  },
  data: () => ({
    username: "manuellaraa",
    tabs: null,
    data: null,
    response: false,
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
          { location: "Inglewood USD | 2018-19" , src: "Computer Technician" },
          { location: "In-N-Out | 2010-Present" , src: "Associate" },
        ]
      },
    ],
  }),
  mounted() {

    // API call
    RssToJson.rsstojson({
      username: this.username
    }).then(result => {
      // console log response
      console.log(result.data)
      // update response => true
      this.response = true
      // save result => data
      this.data = result.data
    });

  }
};
</script>

<style scoped>

</style>
