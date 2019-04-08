<template>
    <div id="chat-list">
        <ChatMessage v-for="(m, index)  in messages" :key="index" :message="m.msg" :right="m.right" :first="m.first"
                     :end="m.end" :type="m.type"></ChatMessage>
    </div>
</template>

<script>
    import ChatMessage from "./ChatMessage";

    export default {
        name: "ChatList",
        components:{ChatMessage},
        data() {
            return {
                messages: [],
                questions: [{
                    id: 1,
                    messages: [{
                        msg: "嗨️",
                        type:1,
                        first: true
                    }, {
                        msg: "欢迎来寻找失去的东西",
                        type:1,
                    }, {
                        msg: "这是真实测试",
                        type:1,
                    }, {
                        msg: "开始测试之前",
                        type:1,
                    }, {
                        msg: "要不要先了解一下角马能源？",
                        type:1,
                        end: true
                    }], // 消息
                    answers: [{
                        id: 11,
                        type:2,
                        content: "了解一下",
                    }, {
                        id: 12,
                        type:2,
                        content: "直接答题",
                    }], //答案
                }, {
                    id: 2,
                    messages: [{
                        msg: "角马能源",
                        type:1,
                        first: true
                    },{
                        msg: "是中国领先的能源和环保产业科技服务公司",
                        type:1,
                    },{
                        msg: "我们旨在赋能企业",
                        type:1,
                    },{
                        msg: "通过供应链优化与管理",
                        type:1,
                    },{
                        msg: "大数据应用、物联网等产品和服务",
                        type:1,
                    },{
                        msg: "为能源和环保企业降低经营成本",
                        type:1,
                    }, {
                        msg: "提高生产效率",
                        type:1,
                        end: true
                    }], // 消息
                    answers: [{
                        id: 12,
                        type:2,
                        content: "直接答题",
                    }], //答案
                }, {
                    id: 3,
                    messages: [{
                        msg: "ok",
                        type:1,
                        first: true
                    }, {
                        msg: "1+1=?",
                        type:1,
                    }, {
                        msg: "=2",
                        type:1,
                    }, {
                        msg: "没猜对吧",
                        type:1,
                    }, {
                        msg: "懂规则了吗？",
                        type:1,
                        end: true
                    }], // 消息
                    answers: [{
                        id: 13,
                        type:2,
                        content: "好的，我明白了",
                    }], //答案
                },{
                    id: 4,
                    messages: [{
                        msg: "下面有两面镜子",
                        type:1,
                        first: true
                    },{
                        msg: "你更喜欢哪一个？",
                        type:1,
                        end: true
                    }], // 消息
                    answers: [{
                        type:2,
                        id: 14,
                        content: "日出",
                    },{
                        id: 15,
                        type:2,
                        content: "日落",
                    }], //答案
                },{
                    id: 5,
                    messages: [{
                        msg: "日出时分",
                        type:1,
                        first: true
                    },{
                        msg: "总是充满希望",
                        type:1,
                        end: true
                    }]
                },{
                    id: 5,
                    messages: [{
                        msg: "日落时分",
                        type:1,
                        first: true
                    },{
                        msg: "总是",
                        type:1,
                        end: true
                    },{
                        msg: "./assets/oil.png",
                        type:3,
                        end: true
                    }]
                }],
                scrollToBottomTimeId: undefined
            }
        },
        created() {
            // 开始第一个问题
            this.initQuestionMessages(0);
            this.$bus.$on("answer",(res) => {
                // 添加回答
                let message = {
                    msg: res.content,
                    right: true,
                };
                this.messages.push(message);
                this.scrollToBottom();
                if (res.id === 11) {
                    this.initQuestionMessages(1);
                }
                if (res.id === 12) {
                    this.initQuestionMessages(2);
                }
                if (res.id === 13) {
                    this.initQuestionMessages(3);
                }
                if (res.id === 14) {
                    this.initQuestionMessages(4);
                }
                if (res.id === 15) {
                    this.initQuestionMessages(5);
                }
            })
        },
        beforeDestroy() {
            this.$bus.$off("answer")
        },
        methods: {
            //滚动条滚动到底部
            scrollToBottom: function () {
                if (this.scrollToBottomTimeId) {
                    clearTimeout(this.scrollToBottomTimeId);

                }
                this.scrollToBottomTimeId = setTimeout(function () {
                    const chat = document.getElementById('chat-list');
                    chat.scrollTop = chat.scrollHeight;
                }, 100);
            },
            initQuestionMessages: function (id) {
                const msgs = this.questions[id].messages;
                if (msgs) {
                    const that = this;
                    let i = 0;
                    const iv = setInterval(() => {
                        if (i < msgs.length) {
                            that.messages.push(msgs[i]);
                            this.scrollToBottom();
                            i++;
                        } else {
                            clearInterval(iv);
                            const ans = this.questions[id].answers;
                            if (ans) {
                                this.$bus.$emit("action", ans);
                            }
                            //事件广播
                        }
                    }, 1000)
                }
            }
        }
    }
</script>

<style scoped>
    #chat-list {
        height: calc(100% - 1.6rem);
        width: 100%;
        overflow-y: auto;
    }

    #chat-list::-webkit-scrollbar {
        display: none;
    }
</style>
