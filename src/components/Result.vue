<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm12>
				<v-container grid-list-xl fluid >
					<v-layout row wrap>
						<v-img class="image" v-on:click="$emit('click-card', 'birds of paradise')"></v-img>
					</v-layout>
					<!-- grab images via array magically rows of 4 -->
			</v-container>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
export default {
	name: 'Result',
	data () {
		return {
			cards: []
		}
	},
	created () {
		if (localStorage.getItem('mtgdata') !== null){
			this.cards = localStorage.getItem('mtgdata')
		}
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