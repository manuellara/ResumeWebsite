<template>
  <div class="calendar" />
</template>
<script>
import GitHubCalendar from "github-calendar"
import 'github-calendar/dist/github-calendar-responsive.css';
export default {
    mounted() {
        GitHubCalendar(".calendar", "manuellara", { responsive: true })
    }
}
</script>

<style scoped></style>
