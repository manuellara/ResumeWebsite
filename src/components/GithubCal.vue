<template>
  <div class="calendar" />
</template>
<script>
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
export default {
  mounted() {
    var options = {
      responsive: true,
    }

    GitHubCalendar(".calendar", "manuellara", options);
  },
};
</script>

<style scoped></style>
