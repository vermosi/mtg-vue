<template>
	<v-container>
		<v-layout align-start justify-start row fill-height >
			<h2 v-if="error">NOPE</h2>
			<v-img v-for="card in cards" :key="card.id" class="image" :src="card.image_uris.normal" v-on:click="$emit('click-card', card.name)"></v-img>
		</v-layout>
					<!-- grab images via array magically rows of 4 -->
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

.image {


	border-radius: 20px;
}

</style>
