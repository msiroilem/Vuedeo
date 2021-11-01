<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="background_image" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
        <div>Metacritic score: {{ gameDetails.metacritic }}</div>
        <div>{{ gameDetails.description_raw }}</div>
        <button @click="backButton">Home</button>
      </div>
      <div class="reddit">
        <h2>New Reddit Posts</h2>
        <div class="postcard" :key="post.data.id" v-for="post in redditLists">
          <div>
            <a :href="post.data.url">{{ post.data.title }}</a>
            <div>Post by: {{ post.data.author }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { RAWG_KEY } from '../globals'
export default {
  name: 'GameDetails',
  data: () => ({
    gameDetails: null,
    redditLists: []
  }),
  mounted() {
    this.getGameDetails()
  },
  methods: {
    async getGameDetails() {
      let gameId = parseInt(this.$route.params.game_id)
      let res = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${RAWG_KEY}`
      )
      this.gameDetails = res.data
      let name = this.gameDetails.name
      let res2 = await axios.get(
        `https://www.reddit.com/search.json?q=${name}&sort=new`
      )

      this.redditLists = res2.data.data.children
    },

    backButton() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
a {
  font-size: 1.5em;
}
.postcard {
  margin: 2em, 0, 2em, 0;
  color: blanchedalmond;
}
</style>
