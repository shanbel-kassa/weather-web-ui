import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:()=>import('./view/Home.vue')
        },
        {
            path:"/about",
            component:()=>import('./view/About.vue')
        }
    ]
})
createApp(App).use(router).mount('#app')
