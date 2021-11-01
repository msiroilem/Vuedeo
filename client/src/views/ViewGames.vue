<template>
  <div className="container-grid"></div>
</template>

<script>
const API_KEY = process.env.VUE_APP_RAWG_KEY
import axios from 'axios'
export default {
  name: 'ViewGames',
  data: () => ({
    games: [],
    genreGames: ''
  }),
  mounted() {
    this.getGamesByGenre()
  },
  methods: {
    async getGamesByGenre(genreId) {
      // Get Genre Id here
      const res = await axios.get(
        `https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`
      )
      this.genreGames = res.data
    }
  }
}
</script>
