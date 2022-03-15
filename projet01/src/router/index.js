import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../components/Accueil";
import Palais from "../components/Palais";
import Bug from "../components/Bug";
import CSV from "../components/CSV";
import Illustration from "../components/Illustration";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },

    {
      path: '/Palais',
      name: 'Palais',
      component: Palais
    },

    {
      path: '/Bug',
      name: 'Bug',
      component: Bug
    },


    {
      path: '/CSV',
      name: 'CSV',
      component: CSV
    },

    {
      path: '/Illustration',
      name: 'Illustration',
      component: Illustration
    },

  ]
})
