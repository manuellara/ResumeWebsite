<template>
  <v-container fill-height>
    <v-row justify="center">

      <!-- column 1 -->
      <v-col align="center" cols="6">
        <v-row justify="center">
          <!-- profile picture -->
          <v-flex pa-2 sm12 md12>
            <v-avatar class="profile" size="200">
              <v-img src="@/assets/profile.jpg" />
            </v-avatar>
          </v-flex>

          <!-- buttons -->
          <v-flex pa-2 sm12 md3 v-for="(item, i) in buttons" :key="i">
            <v-btn text large color="black" @click="item.flag = !item.flag">
              {{ item.title }}
            </v-btn>
          </v-flex>

          <!-- github calendar -->
          <v-flex pa-2 sm12 md12>
            <GithubCal />
          </v-flex>
        </v-row>
      </v-col>

      <!-- column 2 -->
      <v-col align="center" cols="6" v-show="show">
        <v-row justify="center">

          <!-- block quote -->
          <v-flex pa-2 sm12 md6 v-for="(item, i) in buttons" :key="i" v-show="item.flag">
            <h3>{{ item.title }}</h3> 
              <blockquote class="blockquote">
                {{ item.content }}
              </blockquote>
          </v-flex>

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import GithubCal from "../components/GithubCal";

export default {
  components: {
    GithubCal,
  },
  data: () => ({
    buttons: [
      { title: "ABOUT", flag: false, content: "IT professional looking to advance my career in technology. After completing my undergraduate degree in Computer Technology, I completed a Computer Science certificate: reinforcing my background. Recently, I achieved a Master in Cyber Security. With my skills in technical support, troubleshooting, and programming, I feel I have a solid foundation on which I can continue to build on." },
      { title: "EDUCATION", flag: false, content: "Bachelors in Computer Technology • Certificate in Computer Science • Masters in Cyber Security" },
      { title: "EXPERIENCE", flag: false, content: "Applications Support Technician & Computer Technician @ Inglewood Unified School District • IT Help Desk @ California State University, Dominguez Hills • Level 6 Associate @ In-N-Out" },
      { title: "CONTACT", flag: false, content: "manuellaraa@gmail.com • (310) 408-0117" },
    ],
  }),
  methods: {
    //
  },
  computed: {
    show(){
      var BreakException = false
      try{
        this.buttons.forEach(item => {
          if(item.flag == true) throw BreakException
        });
      }
      catch(e){
        if (e == BreakException) return true
      }
      return false
    }
  }
};
</script>

<style scoped>
.blockquote{
  text-align: justify;
  text-justify: inter-word;
}
</style>
