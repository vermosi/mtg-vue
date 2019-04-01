<template>
	<v-app dark>
		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<h1>MTG<span class="font-weight-light">VUE</span></h1>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
      			<v-btn v-on:click="randomData" flat>Random</v-btn>
      		</v-toolbar-items>
	</v-toolbar>

	<v-content dark>
		<Search v-on:search-cards="searchData" />
		<Result :error="error" :cards="cards" :symbols="symbols" />
	</v-content>
	<v-footer fixed>
		<v-spacer></v-spacer>
		<div>Made with &hearts; by Vermosi in Nashville, TN - &copy; {{ new Date().getFullYear() }}</div>
		<v-spacer></v-spacer>
	</v-footer>
</v-app>
</template>

<script>
import Search from './components/Search'
import {symbols} from './Symbols'
import Result from './components/Result'
export default {
	name: 'App',
	components: {
		Search,
		Result
	},
	data () {
		return {
			cardResults: [],
			cards: [],
			error: "",
			symbols: []
		}
	},
	created() {
		this.symbols = symbols
	},
	methods: {
		searchData(searchTerm) {
			const url = 'https://api.scryfall.com/cards/named?fuzzy=';
			this.cards = []
			this.error = this.post = null
			this.loading = true
			let self = this
			fetch(url + searchTerm)
			.then(res => {
				if (res.status === 200) {
					return res.json()
				} else {
					self.error = "No results found";
				}
			})
			.then(response => {
				var cardsData = response
				self.cards = new Array(cardsData);
       		})
			.catch(error => {
				console.error('Error:',error);

			})
		},
		randomData(e) {
			const randomurl = 'https://api.scryfall.com/cards/random/'
			this.cards = []
			this.error = this.post = null
			this.loading = true
			let self = this
			fetch(randomurl)
			.then(res => {
				if (res.status === 200) {
					return res.json()
				} else {
					self.error = "Random Button Broke"
				}
			})
			.then(response => {
				var cardsData = response
				self.cards = new Array(cardsData);
			})
			.catch(error => {
				console.error('Error:',error);
			})
		}
	}
};
</script>
