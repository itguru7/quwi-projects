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
      this.$toast.success('Login success')
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    } catch (error) {
      if (error.response) {
        const { data } = error.response
        this.$toast.error(data.first_errors.email)
      }
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
