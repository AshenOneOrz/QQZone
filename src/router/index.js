import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index/Index.vue'),
    },
    {
        path: '/thought',
        name: 'Thought',
        component: () => import('../views/thought/Thought.vue'),
    },
    {
        path: '/album',
        name: 'Album',
        component: () => import('../views/album/Album.vue'),
        children: [
            {
                path: 'animal',
                name: 'Animal',
                component: () => import('../views/album/Album.vue'),
            },
        ],
    },
    {
        path: '/article',
        name: 'Article',
        redirect: '/article/list',
        component: () => import('../views/article/Index.vue'),
        children: [
            {
                path: 'list',
                name: 'ArticleList',
                component: () => import('../views/article/ArticleList.vue'),
            },
            {
                path: 'detail',
                name: 'ArticleDetail',
                component: () => import('../views/article/ArticleDetail.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
