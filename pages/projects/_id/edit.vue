<template>
  <div class="project-page">
    <form v-if="project" class="project-form" @submit.prevent="onUpdate">
      <div class="form-group">
        <label for="name">
          Name
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Name"
          required
        >
      </div>
      <div class="form-group">
        <img :src="project.logo_url" alt="logo">
      </div>
      <div class="form-group">
        <template v-if="project.is_active">
          <span class="active">Active</span>
        </template>
        <template v-else>
          <span class="inactive">Inactive</span>
        </template>
      </div>
      <div class="form-group">
        time this week
        {{ $moment.utc(project.spent_time_week*1000).format('HH:mm:ss') }}
      </div>
      <div class="form-group">
        this month
        {{ $moment.utc(project.spent_time_month*1000).format('HH:mm:ss') }}
      </div>
      <div class="form-group">
        total
        {{ $moment.utc(project.spent_time_all*1000).format('HH:mm:ss') }}
      </div>
      <button type="submit" class="btn btn-update">
        update
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data: () => ({
    name: '',
    project: null
  }),
  computed: {
    ...mapState({
      projects: state => state.project.list
    })
  },
  mounted () {
    this.project = this.projects.find(p => p.id === parseInt(this.$route.params.id))
    if (this.project) {
      this.name = this.project.name
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    onUpdate () {
      this.$store.dispatch('project/update_project', {
        id: this.project.id,
        projectData: {
          ...this.project,
          name: this.name
        }
      })
    }
  }
}
</script>

<style>
</style>
