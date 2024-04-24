import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import TournamentStructureView from '../views/TournamentStructureView.vue'
import TournamentDetails from '../views/TournamentDetailsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WelcomeView },
    { path: '/tournament-structure', component: TournamentStructureView},
    { path: '/tournament-details', component: TournamentDetails}
  ]
})

export default router
