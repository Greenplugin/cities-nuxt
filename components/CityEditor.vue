<template>
  <div class="editor">
    <div class="margin-default">
      <label> City name
        <input
          v-model="city.name"
          placeholder="City name"
          type="text">
      </label>
    </div>
    <div class="margin-default">
      <label> Pressure
        <input
          v-model="city.pressure"
          placeholder="Pressure"
          type="text">
      </label>
    </div>
    <div class="margin-default">
      <label> Temperature
        <input
          v-model="city.temp"
          placeholder="Temperature"
          type="text">
      </label>
    </div>
    <div class="margin-default">
      <label> Wind Deg
        <input
          v-model="city.wind.deg"
          placeholder="Wind Deg"
          type="text">
      </label>
    </div>
    <div class="margin-default">
      <label> Wind Speed
        <input
          v-model="city.wind.speed"
          placeholder="Wind Speed"
          type="text">
      </label>
    </div>
    <div class="margin-default">
      <button
        class="button--green"
        @click="$emit('save', city)">Save
      </button>
      <nuxt-link
        class="button--green"
        to="/">Cancel</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityEditor',
    props: {
      city: {type: Object, required: true}
    }
  }
</script>

<style scoped>
  .editor{
    display: flex;
    align-items: stretch;
    width: 450px;
    max-width: 100%;
    flex-direction: column;
    padding: 20px;
    box-shadow: 1px 1px 6px 1px #d4d4d4;
  }

  .editor > div {
    display: flex;
    align-items: stretch;
  }

  .editor > div > label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
</style>