<template>
    <div class="main">
        <div class="article-list">
            <div v-for="(article, index) in list" :key="index" class="article-item">
                <router-link
                    :to="{
                        path: '/article/detail',
                        query: {
                            id: article.id,
                        },
                    }"
                >
                    <div class="title">
                        <h2>{{ article.title }}</h2>
                    </div>
                    <div class="content">
                        <p>{{ article.content }}</p>
                    </div>
                </router-link>
                <div class="info">
                    <span>{{ article.author }}</span>
                    <span>{{ article.dateTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import list from './mockList'
export default defineComponent({
    components: {},
    setup() {
        return {
            list,
        }
    },
})
</script>

<style lang="less" scoped>
.article {
    &-list {
        width: 60%;
        margin: 0 auto;
    }
    &-item {
        margin-bottom: 20px;
        .title {
            h2 {
                // margin-bottom: 12px;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .content {
            p {
                margin: 10px 0;
                opacity: 0.8;
                font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
                    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                font-size: 14px;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .info {
            display: flex;
            justify-content: space-between;
            span {
                font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
                font-size: 14px;
                position: relative;
                cursor: default;
                &:hover {
                    // text-decoration: underline;
                    &::after {
                        height: 80%;
                    }
                }
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 40%;
                    width: 100%;
                    background-color: rgba(231, 179, 179, 0.4);
                    transition: all 0.1s ease-in;
                }
            }
        }
    }
}
</style>
