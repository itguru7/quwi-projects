<template>
  <nav>
    <a class="navbar-brand" href="#">Q</a>
    <ul class="nav">
      <li>
        <nuxt-link to="/">
          projects
        </nuxt-link>
      </li>
      <li>
        <a href="javascript:void(0)" @click="$store.dispatch('auth/logout')">
          logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
</style>
