<template>
    <div class="toast">
        <p>{{content}}</p>
    </div>
</template>
<script>
    export default {
        name: "Toast",
        data(){
            return {
                content:"",
                duration:3000
            }
        },
        mounted() {
            // 3s 后通过父级移除子元素的方式来移除该组件实例和 DOM 节点
            setTimeout(()=>{
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },this.duration)
        }
    }
</script>
<style lang="scss" scoped>
    .toast {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        z-index: 9999;
        background: transparent;
        > p {
            padding: 12px 22px;
            font-size: 18px;
            border-radius: 4px;
            background: rgba(17, 17, 17, 0.7);
        }
    }
</style>
