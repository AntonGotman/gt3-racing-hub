import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CarsView from '../views/CarsView.vue'
import ResultsView from '../views/ResultsView.vue'
import AboutView from '../views/AboutView.vue'
import CarDetailsView from '../views/CarDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/cars',
        component: CarsView
    },
    {
        path: '/results',
        component: ResultsView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/car/:id',
        component: CarDetailsView,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundView
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})