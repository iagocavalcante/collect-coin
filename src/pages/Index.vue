<template>
  <q-page class="flex flex-center q-pa-a">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <p>{{coins}}</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    coins: ''
  }),
  created () {
    this.$q.bex.on('collected.coin', this.collectCoin)
  },
  beforeDestroy () {
    this.$q.bex.off('collected.coin', this.collectCoin)
  },
  methods: {
    collectCoin (payload) {
      this.coins = payload
      console.log('ACAO DE COLETAR MOEDAS => ', payload)
    }
  }
}
</script>

<style lang="sass">
img
  height: 230px
  width: 230px

.container
  pad
</style>
