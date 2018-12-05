<template>
  <div>
    <div 
      class="margin-default" 
      style="display: flex; justify-content: space-between">
      <b>total cities: {{ this.$store.state.cities.length }}</b>
      <router-link
        class="button--green"
        to="cities/add">Add city</router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Temperature (°c)</th>
          <th>Pressure (mm)</th>
          <th>Wind deg</th>
          <th>Wind speed (m/s)</th>
          <th>edit</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="{item, id} in cities">
          <tr :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.country }}</td>
            <td>{{ item.temp }}</td>
            <td>{{ item.pressure }}</td>
            <td>
              <span
                :style="{transform: 'rotate(' + item.wind.deg + 'deg)'}"
                style="transform-origin: 50%; display: inline-block">↑</span>
            </td>
            <td>{{ item.wind.speed }}</td>
            <td>
              <router-link :to="{ name: 'cities-id', params: { id: id }}">Edit</router-link>
            </td>
            <td>
              <a
                href="#"
                @click="deleteCity(item)">Delete city</a>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <pagination
      v-model="cities"
      :all="this.$store.state.cities"/>
  </div>
</template>

<script>
  import Pagination from '~/components/Pagination.vue'

  export default {
    name: 'CityList',
    components: {
      Pagination
    },
    data() {
      return {
        cities: []
      }
    },
    methods: {
      deleteCity (city) {
        this.$store.commit('removeCity', city)
      }
    }
  }
</script>
