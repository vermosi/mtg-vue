<template>
	<!-- <v-container grid-list-sm>
		<v-layout row wrap>
				<p class="card-error" v-if="error">Sorry, we didn't find that card. Try using the full name. (e.g.: Birds of Paradise)</p>
				<v-img v-for="card in cards" :key="card.id" class="image" :src="card.image_uris.normal" v-on:click="$emit('click-card', card.name)"></v-img>
		</v-layout>
	</v-container> -->
<v-container>
	<v-layout>
    <v-flex xs12>
      <v-card>
        <v-container grid-list-sm fluid>
    	<p class="card-error" v-if="error">Sorry, we didn't find that card. Try using the full name. (e.g.: Birds of Paradise)</p>

          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.mtgo_id"
              xs5
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img v-for="card in cards" :key="card.mtgo_id" id="image" :src="card.image_uris.normal"></v-img>
              </v-card>
            </v-flex>
            <v-flex v-for="card in cards" xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{card.name}} {{card.mana_cost}}</div>
                      <p>{{card.flavor_text}}</p>
                      <p>{{card.artist}}</p>
                      <p v-for="card in cards">{{card.oracle_text}}</p>
                      <p v-for="card in cards">{{card.power}} {{card.toughness}}</p>
                    </div>
                  </v-card-title>
                </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
	name: 'Result',
	props: ['cards', 'error'],
	data () {
		return {

		}
	},
	created () {

		// if (localStorage.getItem('mtgdata') !== null){
		// 	this.cards = localStorage.getItem('mtgdata')
		// }
	},
	methods: {

	}
};
</script>

<style scoped>

.card-error {
	color: red;
	font-style: italic;
}

#image {
	border-radius: 20px;
}

</style>
