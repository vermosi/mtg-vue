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
							xs12 sm5
							d-flex
							>
							<v-card flat tile class="d-flex">
								<v-img v-for="card in cards" :key="card.mtgo_id" id="image" :src="card.image_uris.normal"></v-img>
							</v-card>
						</v-flex>
						<v-flex v-for="card in cards" sm7 xs12>
							<v-card-title primary-title>
								<div>
									<h3 class="title">{{card.name}} {{card.mana_cost}}</h3>
									<p class="description" v-for="card in cards">{{card.oracle_text}}</p>
									<div v-for="card in cards">{{card.power}} / {{card.toughness}}</div>
									<p class="flavor">{{card.flavor_text}}</p>
									<p class="artist">{{card.artist}}</p>
									<hr>
									<div class="legalities">
										<v-btn disabled>{{card.legalities.standard}} in Standard</v-btn>
										<v-btn disabled>{{card.legalities.modern}} in Modern</v-btn>
										<v-btn disabled>{{card.legalities.legacy}} in Legacy</v-btn>
										<v-btn disabled>{{card.legalities.vintage}} in Vintage</v-btn>
										<v-btn disabled>{{card.legalities.commander}} in Commander</v-btn>
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
		this.$refs["myid"].children.replace(/([A-Z])|(\s)|([^a-z\d])/g);
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
