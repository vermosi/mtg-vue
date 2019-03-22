<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">

        <h1>MTG<span class="font-weight-light">VUE</span></h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#"
      >
        <span class="mr-2">Random</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Search v-model="cards" />
      <component :is="currentComponent" :cards="cards" :currentComponent="currentComponent">
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
import Detail from './components/Detail'
import Result from './components/Result'
export default {
  name: 'App',
  components: {
    Search,
    Detail,
    Result
  },
  data () {
    return {
      currentComponent: "",
      cardResults: [],
      cards: []
    }
  },
  methods: {
    searchData() {
      this.error = this.post = null
      this.loading = true
      let searchTerm = this.search
      let self = this
      fetch(url + searchTerm)
      .then(res => res.json())
      .then(response => {
        var cardsData = response
        self.cards.push(cardsData)
        if (self.cards.length < 1){
          self.swapComponent = "Detail"
        }
            //TODO: Find if 1 or more cards
            // If 1 card (object), go to detail
            // otherwise (array), go to result
          })
      .catch(error => console.error('Error:',error))
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
