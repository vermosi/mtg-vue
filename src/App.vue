<template>
	<v-app dark>
		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">

				<h1>MTG<span class="font-weight-light">VUE</span></h1>
			</v-toolbar-title>
			<v-spacer>(work in progress)</v-spacer>
			<v-btn
			flat
			href="#"
			>
			<v-btn class="mr-2">Random</v-btn>
		</v-btn>
	</v-toolbar>

	<v-content dark>
		<Search v-on:search-cards="searchData" />
		<component :is="currentComponent" :error="error" :cards="cards" :currentComponent="currentComponent">
		</component>
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
import Result from './components/Result'
// import cardsData from './assets/scryfall-oracle-cards.json'
export default {
	name: 'App',
	components: {
		Search,
		Result
	},
	data () {
		return {
			currentComponent: "Result",
			cardResults: [],
			cards: [],
			error: ""
		}
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
		checkLocalStorage(){
			if (localStorage.getItem('mtgdata') !== null) {
				searchData()
			} else {
				console.error('Error:',error)
			}
		}
	}
};
</script>
