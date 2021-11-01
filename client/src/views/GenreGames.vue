<template>
  <div>
    <div class="topbar">
      <div class="dropdown">
        <select name="order" id="1" @change="onChange">
          <option value="1">rating:high to low</option>
          <option value="0">rating:low to high</option>
        </select>
      </div>
      <div>
        <button v-if="previousPage" @click="toPreviousPage">
          Previous page
        </button>
        <button v-if="nextPage" @click="toNextPage">Next page</button>
      </div>

      <h2 class="baritem">Total results: {{ total }}</h2>
    </div>

    <div class="platforms_holder">
      <div :key="game.id" v-for="game in games" class="genre_card">
        <h4>{{ game.name }}</h4>
        <div>Rating:{{ game.rating }}</div>
        <div>
          <img
            class="plat_img"
            :src="game.background_image"
            alt=""
            @click="selectGame(game_id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { RAWG_KEY } from '../globals'
export default {
  name: 'GenreGames',
  data: () => ({
    games: [],
    choosed: '',
    previousPage: null,
    nextPage: null,
    total: null
  }),
  mounted() {
    this.getGenreDetail()
  },
  methods: {
    async getGenreDetail() {
      let slug = this.$route.params.genre_slug
      let res = await axios.get(
        `https://api.rawg.io/api/games?genres=${slug}&page_size=30&key=${RAWG_KEY}`
      )
      console.log(res.data)
      this.games = res.data.results
      this.total = res.data.count
      this.nextPage = res.data.next
      this.previousPage = res.data.previous
      this.games.sort((a, b) => b.rating - a.rating)
    },
    onChange(e) {
      console.log(e.target.value)
      if (parseInt(e.target.value) == 1) {
        this.games.sort((a, b) => b.rating - a.rating)
      } else if (parseInt(e.target.value) == 0) {
        this.games.sort((a, b) => a.rating - b.rating)
      }
    },
    async toNextPage() {
      let res = await axios.get(this.nextPage)
      console.log(res.data)
      this.games = res.data.results
      this.total = res.data.count
      this.nextPage = res.data.next
      this.previousPage = res.data.previous
      this.games.sort((a, b) => b.rating - a.rating)
    },
    async toPreviousPage() {
      let res = await axios.get(this.previousPage)
      console.log(res.data)
      this.games = res.data.results
      this.total = res.data.count
      this.nextPage = res.data.next
      this.previousPage = res.data.previous
      this.games.sort((a, b) => b.rating - a.rating)
    },
    selectGame(game_id) {
      this.$router.push(`/details/${game_id}`)
    }
  }
}
</script>
