export const state = () => ({
  list: []
})

export const mutations = {
  SAVE_PROJECTS (state, projects) {
    state.list = projects
  }
}

export const actions = {
  async fetch_projects ({ rootState, commit, dispatch }) {
    try {
      commit('SAVE_PROJECTS', [])
      const { token } = rootState.auth
      const { data } = await this.$axios.get('projects-manage/index', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const { projects } = data
      commit('SAVE_PROJECTS', projects)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch('auth/logout')
      }
      throw error
    }
  },
  async update_project ({ rootState, dispatch }, { id, projectData }) {
    try {
      const { token } = rootState.auth
      await this.$axios.post('projects-manage/update',
        { ...projectData },
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            id
          }
        }
      )
      this.$router.push('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch('auth/logout')
      }
      throw error
    }
  }
}

export default {
  state,
  mutations,
  actions
}
