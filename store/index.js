export const state = () => ({
  cities: []
})

export const mutations = {
  setCities (state, cities) {
    state.cities = cities
  },
  removeCity (state, city) {
    state.cities.splice(state.cities.indexOf(city), 1)
  },
  updateCity (state, {index, city}) {
    state.cities[index].name = city.name
    state.cities[index].pressure = city.pressure
    state.cities[index].temp = city.temp
    state.cities[index].wind.deg = city.wind.deg
    state.cities[index].wind.speed = city.wind.speed
  },
  addCity (state, city) {
    state.cities.push({
      name: city.name,
      country: 'N/A',
      pressure: city.pressure,
      temp: city.temp,
      wind: {
        deg: city.wind.deg,
        speed: city.wind.speed
      }
    })
  }
}

export const actions = {
  async nuxtServerInit ({commit}, {app}) {
    let response = await app.$axios.$get('https://my-json-server.typicode.com/greenplugin/cities-with-weather-json/cities')
    commit('setCities', response)
  }
}