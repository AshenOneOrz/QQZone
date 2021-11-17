<template>
    <div class="nav">
        <div v-for="(item, index) in nav" :key="index" class="item">
            <router-link :to="item.path">
                <a
                    :class="{
                        current:
                            item.path.length > 1 ? item.path.includes(path) && path !== '' && path !== '/' : item.path === '/' && (path === '/' || path === ''),
                    }"
                    class="a"
                    >{{ item.name }}
                </a>
            </router-link>
            <div class="sub-menu">
                <div v-for="(subItem, index) in item.children" :key="index">
                    <router-link
                        :to="{
                            path: item.path,
                            query: subItem.query,
                        }"
                    >
                        <a
                            class="a"
                            :class="{
                                current: deepEqual(subItem.query, query),
                            }"
                            >{{ subItem.name }}
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import nav from '../../config/nav'
const deepEqual = (a, b) => {
    for (const key in a) {
        if (a[key] !== b[key]) {
            return false
        }
    }
    return true
}
export default {
    components: {},
    data() {
        return {
            nav,
            path: '',
            query: {},
            deepEqual,
        }
    },
    watch: {
        '$route.path': function (to, from) {
            let l = to.split('/')
            let path = '/' + l[1]
            log(path)
            this.path = path
        },
        '$route.query': function (to, from) {
            this.query = to
        },
    },
}
</script>

<style lang="less" scoped>
.nav {
    margin-top: 32px;
    .item {
        margin-bottom: 3px;

        .sub-menu {
            margin-left: 20px;
            .a {
                font-size: 16px;
            }
        }
    }

    .a {
        // display: block;
        cursor: pointer;
        position: relative;
        &:hover {
            // text-decoration: underline;
            &::after {
                height: 50%;
            }
        }
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 20%;
            width: 100%;
            background-color: rgba(231, 179, 179, 0.4);
            transition: all 0.1s ease-in;
        }
    }
    .current {
        &::after {
            height: 50%;
            background-color: rgba(62, 181, 185, 0.4);
        }
    }
}
</style>
