<template>
  <div class="platformDetail" v-if="platform">
    <button @click="backButton">Back</button>
    <h2>{{ platform.name }}</h2>
    {{ platform.description.slice(3, -4) }}

    <p>Total games: {{ platform.games_count }}</p>
    <img :src="platform.image_background" alt="" />
  </div>
</template>

<script>
import axios from 'axios'
import { RAWG_KEY } from '../globals'
export default {
  name: 'PlatformDetails',
  data: () => ({
    platform: null
  }),
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      let id = parseInt(this.$route.params.platform_id)
      let res = await axios.get(
        `https://api.rawg.io/api/platforms/${id}?key=${RAWG_KEY}`
      )

      this.platform = res.data
    },
    backButton() {
      this.$router.push('/platforms')
    }
  }
}
</script>
