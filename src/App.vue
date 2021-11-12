<template>
    <div class="page">
        <Header />

        <main>
            <!-- <router-view></router-view> -->
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>

<script>
import Header from './components/common/header/Header.vue'
export default {
    components: {
        Header,
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        },
    },
}
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
    padding: 48px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
