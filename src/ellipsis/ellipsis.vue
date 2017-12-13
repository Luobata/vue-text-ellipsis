<template lang="pug">
    div
        p.ellipsis(v-for="item in textArr") {{ item }}
</template>
<style lang="styl">
</style>
<script>
    import core from './core';
    import { userConfig } from './config';

    export default {
        name: 'ellipsis',
        props: {
            text: {
                type: String,
                default: '',
            },
            width: {
                type: String,
                default: '50px',
            },
            'line-height': {
                type: String,
                default: '14px',
            },
            'line-num': {
                type: Number,
                default: 1,
            },
            tagName: {
                type: String,
                default: 'p',
            }
        },
        data() {
            return {
                textArr: []
            };
        },
        methods: {
            init() {
                // 初始化
                this.textArr = core({
                    text: this.text,
                    width: this.width,
                    lineHeight: this.lineHeight,
                    lineNum: this.lineNum,
                    fontFamily: this.fontFamily || userConfig['font-family'],
                    fontWeight: this.fontWeight || userConfig['font-weight'],
                    left: '...',
                });
            }
        },
        beforeMount() {
            this.init();
        }
    };
</script>
