<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 md4>
				<v-img class="image" :src="cardImage"></v-img>
			</v-flex>
			<v-flex xs12 sm6 md4>
				<div class="card_text">
					<h1 class="card_title"> {{ cardTitle }} </h1>
					<hr>
					<span>
						<abbr class="card-symbol">{1}</abbr>
						<abbr class="card-symbol">{U/W}</abbr>
						<abbr class="card-symbol">{U/W}</abbr>
					</span>
					<hr>
					<p>
						{{ cardText }}
					</p>
					<hr>
					<h2 class="card_title">
						2 / 2
					</h2>
					<p class="artist">
						Illustrated by Steve Prescott
					</p>
					<hr>
					<v-layout row wrap>
						<v-flex xs12 sm6 md4>
							<v-btn color="success">Legal</v-btn><span>Standard</span>
							<v-btn color="success">Legal</v-btn><span>Standard</span>
							<v-btn color="success">Legal</v-btn><span>Standard</span>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-btn color="error">Banned</v-btn><span>Standard</span>
							<v-btn color="error">Banned</v-btn><span>Standard</span>
							<v-btn color="warning">Limited</v-btn><span>Standard</span>
						</v-flex>
					</v-layout>
				</div>
			</v-flex>
			<v-flex xs12 sm6 md4>
				<div class="card_pricing">
					<h1 class="pricing_table"> Prices </h1>
					<span class="money">
						$500 : ¢50000
					</span>
					<span>
						Link to CardKingdom
					</span>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Info',
	props: ['cardText','cardImage','cardTitle'],
	data () {
		return {
		}
	}
};
</script>

<style scoped>

p {
	margin: 10px auto;
	padding: 10px;
}

span {
	padding: 10px;
}

hr {
	margin: 5px;
	border: 0;
	height: 1px;
	background: #666;
	background-image: linear-gradient(to left, #333, #666, #333);
}

.image {
	border-radius: 20px;
}

.detail_text {
	border: 1px dashed white;
	border-radius: 20px;
	margin: auto;
	padding: 20px 40px;
}

.card_text, .card_pricing {
	padding: 30px;
	width: auto;
}
</style>