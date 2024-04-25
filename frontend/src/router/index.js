import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import TournamentStructureView from '../views/TournamentStructureView.vue'
import TournamentDetailsView from '../views/TournamentDetailsView.vue'
import SingleEliminationView from '../views/SingleEliminationView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WelcomeView },
    { path: '/tournament-structure', component: TournamentStructureView },
    { path: '/tournament-details', component: TournamentDetailsView },
    { path: '/single-elimination', component: SingleEliminationView }
  ]
})

export default router
