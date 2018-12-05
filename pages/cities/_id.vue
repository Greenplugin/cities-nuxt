<template>
  <section class="container">
    <city-editor
      v-if="city"
      :city="city"
      @save="saveCity"/>
  </section>
</template>

<script>
  import CityEditor from '~/components/CityEditor.vue'

  export default {
    name: 'CityId',
    components: {CityEditor},
    data () {
      return {
        city: false
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadCity(to.params)
      }
    },
    mounted () {
      this.loadCity(this.$route.params)
    },
    methods: {
      loadCity (params) {
        this.city = {...this.$store.state.cities[params.id], wind: {...this.$store.state.cities[params.id].wind}}
      },
      saveCity (city) {
        this.$store.commit('updateCity', {city: city, index: this.$route.params.id})
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>