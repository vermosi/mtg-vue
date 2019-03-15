<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm12>
				<v-container grid-list-xl fluid >
					<v-layout row wrap>
						<v-img class="image" v-on:click="$emit('click-card', 'birds of paradise')" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
					</v-layout>
					<v-layout row wrap>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
					</v-layout>
					<v-layout row wrap>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
						<v-img class="image" :src="cardImage"></v-img>
					</v-layout>
				</v-container>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Result',
	props: ['cardImage'],
	data () {
		return {

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