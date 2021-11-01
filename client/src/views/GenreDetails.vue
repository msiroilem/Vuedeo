<template>
  <div class="genre-content">
    <section class="image-container">
      <div></div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>Genre Details</h3>
        <div>{{ genreDetails.name }}</div>
        <img :src="genreDetails.image_background" />
        <div v-html="genreDetails.description" />
      </div>
      <div v-for="game in genres" :key="game.id">
        <h1>{{ game.name }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
const API_KEY = process.env.VUE_APP_RAWG_KEY
import axios from 'axios'
export default {
  name: 'GenreDetails',

  data: () => ({
    genreDetails: [],
    genreGames: null
  }),
  mounted() {
    this.getGenreDetails()
  },
  methods: {
    async getGenreDetails() {
      // Get game id from router here
      const res = await axios.get(
        `https://api.rawg.io/api/genres/${this.$route.params.genre_id}?key=${API_KEY}`
      )
      console.log(res.data, 'hi how are you')
      this.genreDetails = res.data
    }
  }
}
</script>

<style>
img {
  max-height: 200px;
}
</style>
