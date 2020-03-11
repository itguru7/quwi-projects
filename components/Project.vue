<template>
  <nuxt-link :to="`/projects/${project.id}/edit`">
    <div class="project">
      <table>
        <tbody>
          <tr>
            <td class="project__image" rowspan="3">
              <template v-if="project.logo_url">
                <img :src="project.logo_url" alt="logo">
              </template>
              <template v-else>
                <img src="~/assets/images/logo.png" alt="logo">
              </template>
            </td>
            <td class="project__name" rowspan="3">
              {{ project.name }}
            </td>
            <td class="project__status" rowspan="3">
              <template v-if="project.is_active">
                <span class="active">Active</span>
              </template>
              <template v-else>
                <span class="inactive">Inactive</span>
              </template>
            </td>
            <td class="project__range">
              time this week
            </td>
            <td class="project__duration">
              {{ $moment.utc(project.spent_time_week*1000).format('HH:mm:ss') }}
            </td>
          </tr>
          <tr>
            <td class="project__range">
              this month
            </td>
            <td class="project__duration">
              {{ $moment.utc(project.spent_time_month*1000).format('HH:mm:ss') }}
            </td>
          </tr>
          <tr>
            <td class="project__range">
              total
            </td>
            <td class="project__duration">
              {{ $moment.utc(project.spent_time_all*1000).format('HH:mm:ss') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>
