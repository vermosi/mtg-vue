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
<<<<<<< Updated upstream
								<div ref="myid">
									<div class="headline">{{card.name}} {{card.mana_cost}}</div>
									<p v-for="card in cards">{{card.oracle_text}}</p>
									<p v-for="card in cards">{{card.power}} {{card.toughness}}</p>
									<p>{{card.flavor_text}}</p>
									<p>{{card.artist}}</p>
=======
								<div>
									<h3 class="title">{{card.name}} <abbr :style="mana_cost"></abbr></h3>
									<p class="description">{{card.oracle_text}}</p>
									<p class="flavor">{{card.flavor_text}}</p>
									<p class="artist">{{card.artist}}</p>
									<p class="pnt">{{pnt}}</p>
									<p>Last printed in: {{card.set_name}}
>>>>>>> Stashed changes
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
	props: ['cards', 'error', 'symbols'],
	data () {
		return {

		}
	},
	computed: {
		pnt(e) {
			if (this.cards[0].power || this.cards[0].toughness) {
				return `${this.cards[0].power} / ${this.cards[0].toughness}`
			}
		},
		mana_cost(e) {
			var mana_cost = this.cards[0].mana_cost;
			var symbols = this.symbols[62];
			console.log(mana_cost);
			if (symbols) {
				symbols.toString(symbol => symbol.code == mana_cost)
				let symbol = this.symbols.find(symbol => {
					if (symbol.code == mana_cost) {
						return `{background-image:${symbol.url};}`
					}
				});
				console.log(symbol);
			}
		}
	}
};
	</script>

<style scoped>

.title {
	padding-bottom:5px;
}

.flavor, .artist {
	font-style: italic;
}

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
