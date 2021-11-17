<template>
    <div class="main">
        <div class="thought-list">
            <div class="thought-item">
                <div class="thought-content">
                    <p>以前听过一句话“如果你在年轻时就迷上这些乐队，像Beatles、PinkFloyd、Queen、Dire Straits …那你很悲哀，因为这世上再也没有可能让你感到真正心灵上震撼的音乐了。”</p>
                </div>
            </div>
            <div class="thought-item">
                <div class="thought-content">
                    <p>黄色头发静静的躺在我的床上</p>
                    <p>像是一个机关等待被触发</p>
                </div>
            </div>
            <div class="thought-item">
                <div class="thought-content">
                    <p>The endless river</p>
                    <p>这无尽之河</p>
                    <p>Forever and ever</p>
                    <p>生生不息</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>

<style lang="less" scoped>
.thought {
    &-list {
        padding: 32px;
    }
}
</style>
