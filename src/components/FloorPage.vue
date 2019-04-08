<template>
    <transition name="choose">
        <div id="floor-page">
            <button class="floor-page" v-for="c in images" :key="c.id" @click="onChooseClick(c)">{{c.img}}</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FloorPage",
        data() {
            return {
                results: [{
                    id: 21,
                    type:3,
                    images: [{
                        img: "./public/assets/light.png",
                        choose: true
                    }]

                },{
                    id: 22,
                    type:3,
                    images: [{
                        img: "./public/assets/gas.png",
                        choose: true
                    }]
                },{
                    id: 23,
                    type:3,
                    images: [{
                        img: "./public/assets/coal.png",
                        choose: true
                    }]
                },{
                    id: 24,
                    type:3,
                    images: [{
                        img: "./public/assets/electricity.png",
                        choose: true
                    }]
                },{
                    id: 25,
                    type:3,
                    images: [{
                        img: "./public/assets/oil.png",
                        choose: true
                    }]
                },{
                    id: 26,
                    type:3,
                    images: [{
                        img: "./public/assets/wind.png",
                        choose: true
                    }]
                }]
            }
        },
        methods: {
            onChooseClick: function (result) {
                this.$bus.$emit("result", result);
            }
        }
    }
</script>

<style scoped>
    #floor-page{

    }
    .choose-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .choose-enter, .fade-leave-to {
        opacity: 0;
    }
</style>