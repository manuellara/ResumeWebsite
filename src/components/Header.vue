<template>
  <div>

    <!-- header -->
    <v-card elevation="8" class="mb-12 rounded-xl base">
        <v-img 
        height="100%"
        class="rounded-xl"
        gradient="to top, rgba(119, 119, 119, 0.5), rgba(255, 0, 0, 0), transparent"
        src="" />

      <v-card-text>
        <!-- profile picture -->
        <v-flex xs12 sm11 md12>
          <v-avatar
            v-for="(x, i) in avatarProperties"
            :key="i"
            :class="x.class"
            :size="x.size">
            <v-img src="@/assets/profile.jpg" />
          </v-avatar>
        </v-flex>
      </v-card-text>
    </v-card>

    <!-- discription -->
    <v-flex class="text-center black--text" pt-2 xsm12 sm12 md12>
      <h1 class="display-1">Manuel Lara</h1>
      <h4>IT Professional / Software Developer</h4>
      <h5>manuellaraa@gmail.com</h5>
      <h5>Los Angeles, CA</h5>
    </v-flex>

  </div>
</template>

<script>
export default {
  data: () => ({
    avatarProperties: [
      { size: 250, class: "profile hidden-sm-and-down" },
      { size: 200, class: "profile hidden-md-and-up" },
    ],
  }),
};
</script>
<style scoped>
.profile {
  border: solid white 3px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.base {
  position: relative;
  height: 400px;
  /* background: linear-gradient(
    to top,
    rgba(119, 119, 119, 0.5),
    rgba(255, 0, 0, 0),
    transparent
  ); */
}
</style>
