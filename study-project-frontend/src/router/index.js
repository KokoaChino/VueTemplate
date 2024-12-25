import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from "@/stores";
import { nextTick } from 'vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/views/WelcomeView.vue'),
            meta: {
                title: 'Title',
                icon: '/favicon.png'
            },
            children: [
                {
                    path: '',
                    name: 'welcome-login',
                    component: () => import('@/components/welcome/LoginPage.vue'),
                }, {
                    path: 'register',
                    name: 'welcome-register',
                    component: () => import('@/components/welcome/RegisterPage.vue')
                }, {
                    path: 'forget',
                    name: 'welcome-forget',
                    component: () => import('@/components/welcome/ForgetPage.vue')
                }
            ]
        }, {
            path: '/index',
            name: 'index',
            component: () => import('@/views/Item/A1.vue'),
            meta: {
                title: 'Title',
                icon: '/favicon.png'
            }
        }, {
            path: '/a2',
            name: 'a2',
            component: () => import('@/views/Item/A2.vue'),
        }, {
            path: '/a3',
            name: 'a3',
            component: () => import('@/views/Item/A3.vue'),
        }, {
            path: '/a4',
            name: 'a4',
            component: () => import('@/views/Item/A4.vue'),
        }, {
            path: '/a5',
            name: 'a5',
            component: () => import('@/views/Item/A5.vue'),
        }, {
            path: '/a6',
            name: 'a6',
            component: () => import('@/views/Item/A6.vue'),
        },
    ]
})

router.beforeEach((to, from, next) => {
    const store = useStore()
    nextTick(() => {
        if (store.auth.user != null && to.name.startsWith('welcome-')) {
            next('/index')
        } else if (store.auth.user == null && to.fullPath.startsWith('/index')) {
            next('/')
        } else if (to.matched.length === 0) {
            next('/index')
        } else {
            next()
        }
    })
})

export default router