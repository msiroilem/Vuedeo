<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src="image" alt="game_image" />
    </div>
    <div class="info-wrapper flex-col">{{ name }} {{ released }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: ['name', 'image', 'released']
}
</script>
