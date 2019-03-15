<template>
  <div style="margin: auto;" class="dark">
      <Info :cardText="cardText" :cardImage="cardImage" :cardTitle="cardTitle" />
  </div>
</template>

<script>
import Info from './Info'

export default {
  name: 'Detail',
  props: ['cardImage','cardText','cardTitle','cardPricing'],
  components: {
    Info
  }
};
</script>