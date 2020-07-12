import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import History from '@/views/History.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history', //わかってない
    base: process.env.BASE_URL,
    routes : [
        { path : '/', component : Home},
        { path : '/works', component : Works},
        { path : '/history', component : History},
    ]
})

export default router