<template>
  <v-app>

    <navbar /> 

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar },
  data () {
    return {
    }
  }
}
</script>
