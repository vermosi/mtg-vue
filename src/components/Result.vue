<template>
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
									<p v-for="card in cards">{{card.oracle_text}}</p>
									<p v-for="card in cards">{{card.power}} {{card.toughness}}</p>
									<p>{{card.flavor_text}}</p>
									<p>{{card.artist}}</p>
									<hr>
									<div>
										<v-btn disabled>{{card.legalities.standard}} in Standard</v-btn>
										<v-btn disabled>{{card.legalities.modern}} in Modern</v-btn>
										<v-btn disabled>{{card.legalities.legacy}} in Legacy</v-btn>
										<v-btn disabled>{{card.legalities.vintage}} in Vintage</v-btn>
									</div>
									<hr>
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

.legal {
	color: black;
	font-style: italic;
}

.card-error {
	color: red;
	font-style: italic;
}

#image {
	border-radius: 20px;
}

</style>
