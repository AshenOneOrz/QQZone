const nav = [
    {
        name: '主页',
        path: '/',
        children: [],
    },
    {
        name: '相册',
        path: '/album',
        children: [
            {
                name: '动物',
                path: '/album',
                query: {
                    category: 'animal',
                },
            },
            {
                name: '风景',
                path: '/album',
                query: {
                    category: 'xiaobo',
                },
            },
            {
                name: '小波',
                path: '/album',
                query: {
                    category: 'xiaobo',
                },
            },
        ],
    },
    {
        name: '想法',
        path: '/thought',
        children: [],
    },
    {
        name: '文章',
        path: '/article/list',
        children: [
            {
                name: '生活',
                path: '/article/list',
                query: {
                    category: 'life',
                },
            },
            {
                name: '技术',
                path: '/article/list',
                query: {
                    category: 'develop',
                },
            },
        ],
    },
    {
        name: '联系',
        path: '/concat',
        children: [],
    },
]

export default nav
