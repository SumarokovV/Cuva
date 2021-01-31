<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="4" class="fill-height"
      v-for="hotel in $store.state.hotels"
      :key="hotel.id"
    >
      <v-card min-height="450px">
        <v-card-title class="headline">
          {{ hotel.name }} 
        </v-card-title>
        <v-card-text>
          <v-img
            min-height="300px"
            :lazy-src="hotel.img"
            max-height="300"
            max-width="500"
            :src="hotel.img"
            alt="hotel image"
          ></v-img>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            :to="`/hotels/${hotel.id}`"
            small
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
}
</script>
