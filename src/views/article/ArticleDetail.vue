<template>
    <div class="main ">
        <!-- <div class="head">
            <span>上一篇</span>
            <span>返回</span>
            <span>下一篇</span>
        </div> -->
        <div class="title">
            <h2>{{ article.title }}</h2>
        </div>
        <div class="info">
            <span>{{ article.author }}</span>
            <span>{{ article.dateTime }}</span>
        </div>
        <div class="content">
            <div v-html=' article.content'></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import list from './mockList'
export default defineComponent({
    components: {},
    setup() {
        let id = useRoute().query.id
        let article = list.filter((a) => a.id === id)[0]
        // log(article.content)
        // article.content = replaceAll(article.content, '618', '<br>')
        return {
            list,
            article,
        }
    },
})
</script>

<style lang="less" scoped>
.main {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
    .head {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .title {
        text-align: center;
        h2 {
            // margin-bottom: 12px;
        }
    }
    .content {
        div {
            margin: 10px 0;
            color: #000;
            opacity: 0.8;
            // font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
            font-size: 14px;
            white-space: pre-wrap;
            line-height: 26px;
        }
    }
    .info {
        display: flex;
        justify-content: flex-end;
        margin: 20px 0;
        span {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
            font-size: 14px;
            position: relative;
            cursor: default;
            margin-right: 20px;
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
</style>
