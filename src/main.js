import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

// STYLES
import "./assets/css/style.scss"

// ROUTES
const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import(/* webpackChunkName: Root */ "./views/Home.vue")
    }
]

// ROUTER
const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

// APP
createApp(App).use(router).mount('#app')
