<template>
    <transition :name="right?'scale-up-br':'scale-up-bl'">
        <div class="msg" v-if="show && type === 1" :class="{right: right,end: end,first: first}">
            {{message}}
        </div>
        <div v-if="show && type === 2" class="msg msg-img">
            <img :src="'./assets/'+ message +'.png'" @click="floorPage">
        </div>
    </transition>

</template>
<script>
    export default {
        name: "ChatMessage",
        props: {
            message: String,
            first: Boolean, //是否第一个
            right: Boolean, // 是否右侧显示
            end: Boolean, // 是否最后一个
            type: Number, //用以区分消息类型 1：消息 2：落地页
        },
        data() {
            return {
                show: false,
                setTimeOutToShowFloorPageId:undefined
            };
        },
        created() {
            setTimeout(() => {
                this.show = true;
            });
            if (this.type === 2) {
                this.setTimeOutToShowFloorPageId = setTimeout(() => {
                    this.floorPage();
                }, 6000)
            }

        },
        methods: {
            floorPage: function () {
                //清除倒计时器
                if(this.setTimeOutToShowFloorPageId){
                    clearTimeout(this.setTimeOutToShowFloorPageId);
                }
                this.$bus.$emit("page", this.message);
            }
        }
    }
</script>

<style scoped>
    .scale-up-bl-enter-active {

        -webkit-animation: scale-up-bl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-bl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .scale-up-bl-leave-active {
        -webkit-animation: scale-up-bl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse;
        animation: scale-up-bl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse;
    }

    @-webkit-keyframes scale-up-bl {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
        }
    }

    @keyframes scale-up-bl {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
        }
    }

    .scale-up-br-enter-active {
        -webkit-animation: scale-up-br 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-br 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .scale-up-br-leave-active {
        -webkit-animation: scale-up-br 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse;
        animation: scale-up-br 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse;
    }

    @-webkit-keyframes scale-up-br {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
        }
    }

    @keyframes scale-up-br {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
        }
    }

    .msg {
        width: fit-content;
        height: 0.9rem;
        line-height: 0.9rem;
        padding: 0 0.5rem 0 0.2rem;
        margin: 0.1rem;
        background-color: #ffffff;
        border-left: 0.2rem solid #fff;
        border-right: 0.2rem solid #fff;
        border-radius: 0.05rem 0.5rem 0.5rem 0.05rem;
        box-shadow: 0 0.08rem 0.04rem 0.02rem #dfdfdf;

    }

    .msg-img {
        height: 3.8rem;
        padding: 0.3rem 0.1rem 0 0;
    }

    .msg.right {
        margin: 0.1rem 0.1rem 0.1rem auto;
        background-color: #ffa3fe;
        border-left: 0.2rem solid #ffa3fe;
        border-right: 0.2rem solid #ffa3fe;
        border-radius: 0.5rem 0.5rem 0.05rem 0.5rem;
    }

    .msg.first {
        margin-top: 0.3rem;
        border-left: 0.2rem solid #fff;
        border-right: 0.2rem solid #fff;
        border-radius: 0.5rem 0.5rem 0.5rem 0.05rem;
    }

    .msg.end {
        border-left: 0.2rem solid #fff;
        border-right: 0.2rem solid #fff;
        border-radius: 0.05rem 0.5rem 0.5rem 0.5rem;
    }

    .msg img {
        width: 100px;
    }
</style>
