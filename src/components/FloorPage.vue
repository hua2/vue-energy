<template>
    <div v-if="type === 3">
        <img :src="message">
    </div>
</template>

<script>
    export default {
        name: "FloorPage",
        created(){
            this.$bus.$on("page", () => {

            })
        }
    }
</script>

<style scoped>

</style>