<template>
  <v-app-bar
    fixed
    app
  >
    <v-toolbar-title>
      <v-btn link nuxt to="/">
        Shop
      </v-btn>
    </v-toolbar-title>

    <v-snackbar
      top
      v-model="$store.state.notice.show"
    >
      {{ $store.state.notice.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="$store.commit('showSnackbar', {show: false})"
        >
          x
        </v-btn>
      </template>
    </v-snackbar>

    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {

}
</script>