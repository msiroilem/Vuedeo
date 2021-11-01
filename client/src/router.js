import VueRouter from 'vue-router'
import Home from './views/Home'
import GameDetails from './views/GameDetails'
import ViewGames from './views/ViewGames'
import ViewPlatforms from './views/ViewPlatforms'
import PlatformDetails from './views/PlatformDetails'
import GenreGames from './views/GenreGames'
import About from './views/About'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/games', component: ViewGames, name: 'ViewGames' },
  { path: '/details/:game_id', component: GameDetails, name: 'GameDetails' },

  { path: '/about', component: About, name: 'About' },
  { path: '/games/genres/:genre_id', component: ViewGames, name: 'ViewGames' },
  { path: '/platforms', component: ViewPlatforms, name: 'ViewPlatforms' },
  {
    path: '/platforms/:platform_id',
    component: PlatformDetails,
    name: 'PlatformDetails'
  },
  { path: '/genres/:genre_slug', component: GenreGames, name: 'GenreGames' }
]

export default new VueRouter({ routes, mode: 'history' })
