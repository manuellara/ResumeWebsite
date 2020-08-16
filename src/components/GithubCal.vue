<template>
<v-flex pa-2 xs12 sm12 md12>
  <div class="calendar" />
</v-flex>
</template>
<script>
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
export default {
  props:[ 'username' ],
  mounted() {
    var options = {
      responsive: true,
    }

    GitHubCalendar(".calendar", this.username, options);
  },
};
</script>

<style scoped></style>
