<template>
  <div class="container projects-page">
    <template v-for="(project, index) in projects">
      <project :key="index" :project="project" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Project from '@/components/Project'

export default {
  middleware: 'auth',
  components: {
    Project
  },
  computed: {
    ...mapState({
      projects: state => state.project.list
    })
  },
  mounted () {
    this.$store.dispatch('project/fetch_projects')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
