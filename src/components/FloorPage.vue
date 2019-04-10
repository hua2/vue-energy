<template>
    <div v-if="show" class="floorPage">
        <img :src="'./assets/'+img +'.png'" class="shadow">
        <img :src="'./assets/'+img +'.gif'">
        <a id="link" href="http://liuyonghua.cn"></a>
    </div>
</template>

<script>
    export default {
        name: "FloorPage",
        data() {
            return {
                show: false,
                img: '',
            };
        },
        created() {
            const that = this;
            this.$bus.$on("page", (res) => {
                that.show = true;
                that.img = res;
            })
        },
        beforeDestroy() {
            this.$bus.$off("page");
        },
    }
</script>

<style scoped>
    .floorPage {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .floorPage img {
        width: 100%;
        height: 100%;

    }

    .floorPage .shadow {
        position: absolute;
        opacity: 0.01;
        top: 0;
        left: 0;
        z-index: 100;
    }

    #link {
        width: 1rem;
        height: 1rem;
        left: 1rem;
        bottom: 1rem;
        position: absolute;
        z-index: 101;
    }
</style>