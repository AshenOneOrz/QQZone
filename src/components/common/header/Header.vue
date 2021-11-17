<template>
    <header>
        <div class="logo">
            <h2>AshenOne<span> 的 </span>QQ<span> 空间 </span></h2>
        </div>
        <Nav />
        <div class="copyright">
            <p>© 2021 AshenOne</p>
        </div>
    </header>
</template>

<script>
import { defineComponent } from 'vue'
import Nav from '../Nav.vue'
export default defineComponent({
    components: {
        Nav,
    },
    setup(props) {
    },
})
</script>

<style lang="less" scoped>
.logo {
    cursor: pointer;
    h2 {
        span {
            font-size: 16px;
        }
    }
}

.copyright p {
    margin-top: 20px;
    color: dimgrey;
    font-size: 10px;
    font-family:Sans-Serif;
}

</style>
