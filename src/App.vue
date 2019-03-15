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
      <Search/>
      <!-- <Result :cardImage="cardImage"/> -->
      <!-- <Detail :cardText="cardText" :cardImage="cardImage" :cardTitle="cardTitle"/> -->
      <component :is="currentComponent" v-on:click-card="goToDetail" :currentComponent="currentComponent" :cardText="cardText" :cardImage="cardImage" :cardTitle="cardTitle">
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
      currentComponent: "Result",
      cardText: '',
      cardImage: '',
      cardTitle: ''
      //
    }
  },
  methods: {
    goToDetail(name) {
      this.currentComponent = "Detail";
    }
  }
};
</script>
