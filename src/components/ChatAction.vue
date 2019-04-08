<template>
    <transition name="fade">
        <div id="action" v-if="show">
            <button class="action" v-for="a in answers" :key="a.id" @click="onAnswerClick(a)">{{a.content}}</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ChatAction",
        data() {
            return {
                answers: [],
                show: false,
            };
        },
        created() {
            //事件订阅
            this.$bus.$on("action", (res) => {
                this.answers = [];
                this.show = true;
                this.answers = res;
            })
        },
        beforeDestroy() {
            this.$bus.$off("action")
        },
        methods: {
            onAnswerClick: function (answer) {
                this.$bus.$emit("answer", answer);
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    #action {
        width: 100%;
        height: 1.6rem;
        display: flex;
        justify-content: space-around;
    }

    .action {
        width: fit-content;
        padding: 0 0.5rem;
        background: #ffa3fe;
        height: 0.8rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 0.28rem;
        box-shadow: 0 0.07rem 0.16rem 0 #ffa3fe;
    }

    .action:focus {
        outline: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>