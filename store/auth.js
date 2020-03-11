export const state = () => ({
  token: null
})

export const mutations = {
  SAVE_TOKEN (state, token) {
    state.token = token
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    try {
      const { data } = await this.$axios.post('auth/login',
        { email, password }
      )
      const { token } = data
      commit('SAVE_TOKEN', token)
      this.$router.push('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  logout ({ commit }) {
    this.$axios.post('auth/logout')
    commit('SAVE_TOKEN', null)
    this.$router.push('/login')
  }
}

export default {
  state,
  mutations,
  actions
}
