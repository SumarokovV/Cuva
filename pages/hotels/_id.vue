<template>
  <div>

    <v-card>
      <v-card-title>{{ hotel.name }}</v-card-title>
      <v-card-text>

        <v-row justify="center">
          <v-col cols="3">
            <v-img
              :lazy-src="hotel.img"
              max-height="300"
              max-width="500"
              :src="hotel.img"
            ></v-img>
          </v-col>
          <v-col>
            <p>
              {{ hotel.description }}
            </p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum laborum iusto tempore ex rem voluptates error expedita accusamus dolorum sunt aliquam, voluptatibus voluptate nulla quis dicta odit, debitis nemo.
            Obcaecati dicta sint perspiciatis corporis modi. Odit enim laborum nesciunt? Architecto ducimus omnis, nemo expedita impedit quae vero esse beatae! Doloribus non officiis consequatur quam veritatis soluta dolor, sed tempore.
            Nihil est fugiat blanditiis amet fugit facilis ab, consequatur, asperiores vitae doloremque voluptates, quidem ipsa corrupti nesciunt itaque magnam. A exercitationem iste magnam modi blanditiis ad obcaecati ipsam, officia perspiciatis?
            Explicabo quia libero voluptas ad dolorem. Iusto veniam dolorem consequuntur a sint, voluptas odio, laborum odit qui blanditiis, mollitia ipsam? Porro aliquam nulla magnam omnis quasi suscipit totam, voluptatibus similique.
            Eaque, laboriosam nulla voluptatem fugit unde ipsam delectus repellat molestias quos, enim nam et sunt, tempora eius natus. In eius quasi rem ullam provident autem harum repellat beatae dicta distinctio.
            Magni aliquam exercitationem quasi voluptatibus ipsam in consequatur velit, vitae cumque possimus ad minima dolorem tenetur delectus expedita voluptates natus at voluptatem. Voluptas deserunt doloremque numquam. Beatae numquam fuga quod.
            Similique voluptate repellendus delectus ut perspiciatis dignissimos sed, aliquid temporibus architecto iusto omnis quam soluta aperiam nobis. Aut in error rerum deserunt inventore vel cum possimus dolorem explicabo, cupiditate nemo.
            Deleniti quo eos, qui nesciunt est repellat nobis officia dignissimos veniam. Atque nesciunt distinctio maiores qui labore natus ab magni officia vero, debitis ducimus fuga quas molestias cupiditate quo beatae.
            Quas, quae? Iusto, ea cupiditate reprehenderit beatae qui in quam sit vel blanditiis error et? Necessitatibus amet nesciunt maxime reprehenderit eius, totam ipsa ab accusamus provident doloribus dolore natus aliquid.
            Dicta, laborum nihil. Atque earum perspiciatis tempora voluptates et fuga nisi vel deserunt accusamus, culpa autem aspernatur obcaecati ipsum impedit harum repellat reprehenderit totam, aliquam esse molestias eveniet possimus iste?
          </v-col>
        </v-row>
        
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="showDialog = true" color="success">
          Забронировать
        </v-btn>
      </v-card-actions>

    </v-card>

    <reserve-dialog 
      :show="showDialog" 
      :hotel="hotel"
      @close="show => showDialog = show" 
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.hotel.name
    }
  },
  data() {
    return {
      showDialog: false,
    }
  },
  computed: {
    hotel() {
      return this.$store.state.hotels.find(({id}) => id == this.$route.params.id)
    },
  },
  methods: {
    func(data) {
      console.log(data);
    }
  }
}
</script>
