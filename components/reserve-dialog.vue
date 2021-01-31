<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Бронирование</span>
        </v-card-title>
        <v-card-text>
          <v-container>

            <v-row>
              <v-text-field
                label="Фамилия"
                required
                v-model="reserve.user.lastName"
              ></v-text-field>
            </v-row>

            <v-row>
              <v-text-field
                label="Имя"
                required
                v-model="reserve.user.name"
              ></v-text-field>
            </v-row>

            <v-row>
              <v-text-field
                label="Адрес"
                required
                v-model="reserve.user.address"
              ></v-text-field>
            </v-row>

            <v-row>
              <v-text-field
                label="Телефон"
                required
                type="number"
                v-model="reserve.user.phone"
              ></v-text-field>
            </v-row>

          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close', false)"
          >
            Отмена
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="reserveHotel"
          >
            ОК
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    hotel: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      reserve: {
        user: {name: '', lastname: '', address: '', phone: ''},
        hotelId: null,
      }
    }
  },
  methods: {
    async reserveHotel() {
      this.$emit('close', false)

      //fetch('')
      this.$store.commit('showSnackbar', {show: true, text: 'Вам отправлено сообщение'})
    }
  }
}
</script>