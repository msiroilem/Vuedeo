<template>
  <div class="platforms_holder">
    <div
      class="platformcard"
      :key="platform.id"
      v-for="platform in platforms"
      @click="goDetail(platform.id)"
    >
      <img
        class="plat_img"
        :src="platform.image_background"
        alt="background_image"
      />

      <h4>{{ platform.name }}</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { RAWG_KEY } from '../globals'
export default {
  name: 'ViewPlatforms',
  data: () => ({
    platforms: []
  }),
  methods: {
    async getPlatforms() {
      let res = await axios.get(
        `https://api.rawg.io/api/platforms?key=${RAWG_KEY}`
      )

      this.platforms = res.data.results
    },
    async goDetail(id) {
      this.$router.push(`/platforms/${id}`)
    }
  },
  mounted() {
    this.getPlatforms()
  }
}
</script>
