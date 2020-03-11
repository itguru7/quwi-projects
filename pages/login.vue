<template>
  <div class="login-page">
    <form class="login-form" @submit.prevent="onLogin">
      <h2 class="title">
        login
      </h2>
      <div class="form-group">
        <input v-model="email" type="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-login">
        login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  components: {
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    onLogin () {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>
</style>
