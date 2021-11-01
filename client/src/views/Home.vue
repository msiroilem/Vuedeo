<template>
  <div>
    <div class="search">
      <form @submit.prevent="getSearchResults">
        <input type="search" @input="handleChange" :value="searchQuery" />
        <button>Search</button>
      </form>
      <h2 v-if="searched">Search Results</h2>
      <section
        class="search-results container-grid"
        @click="selectGame(game.id)"
        v-for="game in searchResults"
        :key="game.id"
      >
        <GameCard :name="game.name" :image="game.background_image" />
      </section>
    </div>
    <div class="genres" v-if="!searched">
      <h2>Genres</h2>
      <div class="container-grid">
        <section
          class="genre_card"
          v-for="genre in genres"
          :key="genre.id"
          @click="selectGenre(genre.slug)"
        >
          <GenreCard :genre="genre" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
import GenreCard from '../components/GenreCard.vue'
import { RAWG_KEY } from '../globals'
export default {
  name: 'Home',
  components: {
    GenreCard,
    GameCard
  },
  data: () => ({
    genres: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted() {
    this.getGenres()
  },
  methods: {
    async getGenres() {
      const res = await axios.get(
        `https://api.rawg.io/api/genres?key=${RAWG_KEY}`
      )
      this.genres = res.data.results
    },

    async getSearchResults() {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${this.searchQuery}`
      )
      this.searchResults = res.data.results
      this.searched = true
    },
    handleChange(event) {
      this.searchQuery = event.target.value
    },
    selectGame(gameId) {
      this.$router.push(`/details/${gameId}`)
    },
    selectGenre(genre_slug) {
      this.$router.push(`/genres/${genre_slug}`)
    }
  }
}
</script>

<style scoped></style>
