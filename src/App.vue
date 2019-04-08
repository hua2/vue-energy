<template>
    <div id="app">
        <ChatList></ChatList>
        <ChatAction></ChatAction>
        <FloorPage></FloorPage>
    </div>
</template>

<script>
    import ChatList from "./components/ChatList";
    import ChatAction from "./components/ChatAction";
    import FloorPage from "./components/FloorPage";

    export default {
        name: 'app',
        components: {
            FloorPage,
            ChatAction,
            ChatList,
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        height: 100%;
        width: 100%;
        background: aliceblue;
    }

    #app {
        height: 100%;
        width: 100%;

    }
</style>
