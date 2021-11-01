<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="genre.image_background" alt="genre.image_background" />
    </div>
    <div class="info-wrapper flex-col">
      {{ genre.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenreCard',
  props: ['genre']
}
</script>
