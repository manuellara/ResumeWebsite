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
      { title: "ABOUT", flag: false, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at." },
      { title: "EDUCATION", flag: false, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at." },
      { title: "EXPERIENCE", flag: false, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at." },
      { title: "CONTACT", flag: false, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at." },
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
