<template>
    <div v-if="show" class="floorPage">

    </div>
</template>

<script>
    export default {
        name: "FloorPage",
        data() {
            return {
                show: false,
            };
        },
        created() {
            const that = this;
            this.$bus.$on("page", () => {
                that.show = true;
            })
        }
    }
</script>

<style scoped>
    .floorPage {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
    }
</style>