<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <router-view header="games"></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
