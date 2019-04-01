<template>
	<v-container>
		<v-layout>
			<v-flex xs12>
				<v-card>
					<v-container grid-list-sm fluid class="wrapper">
						<p class="card-error" v-if="error">Sorry, we didn't find that card. Try using the full name. (e.g.: Birds of Paradise)</p>

						<v-layout row wrap>
							<v-flex
							v-for="card in cards"
							:key="card.mtgo_id"
							xs12 sm5
							d-flex
							>
							<v-card flat tile class="d-flex">
								<v-img v-for="card in cards" :key="card.oracle_id" id="image" :src="card.image_uris.normal"></v-img>
							</v-card>
						</v-flex>
						<v-flex v-for="card in cards" xs12 sm7>
							<v-card-title primary-title>
								<div>
									<h3 class="title">{{card.name}} <abbr :style="mana_cost"></abbr></h3>
									<p class="description">{{card.oracle_text}}</p>
									<p class="flavor">{{card.flavor_text}}</p>
									<p class="artist">{{card.artist}}</p>
									<p class="pnt">{{pnt}}</p>
									<p>Last printed in: {{card.set_name}}
									<hr class="margin">
									<v-layout class="rulings">
										<v-flex xs12>
											<v-btn v-for="(item, key, index) in card.legalities" :key="card.mtgo_id">
												{{item}} in {{key}}
											</v-btn>
										</v-flex>
									</v-layout>
									<hr class="margin">
									<v-layout class="decks">
										<v-flex xs12>
											<v-btn :src="card.related_uris.gatherer">Gatherer Rulings</v-btn>
											<v-btn :src="card.related_uris.tcgplayer_decks">Decks on TCGPlayer</v-btn>
											<v-btn :src="card.related_uris.edrec">Decks on EDHREC</v-btn>
											<v-btn :src="card.related_uris.mtgtop8">Decks on MTGTop8</v-btn>
										</v-flex>
									</v-layout>
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

.wrapper {
	margin-bottom: 50px;
}

.margin {
	margin: 10px;
}

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
