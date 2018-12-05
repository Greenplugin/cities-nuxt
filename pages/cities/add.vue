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
    name: 'CityAdd',
    components: {CityEditor},
    data () {
      return {
        city: false
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadCity()
      }
    },
    mounted () {
      this.loadCity()
    },
    methods: {
      loadCity () {
        this.city = {
          name: '',
          wind: {
            speed: 0,
            deg: 0
          },
          temp: 0,
          pressure: 0
        }
      },
      saveCity (city) {
        this.$store.commit('addCity', city)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>