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
            },
            lineHeight: {
                type: String,
                default: '14px',
            },
            lineNum: {
                type: Number,
            },
            fontFamily: {
                type：String,
            },
            fontWeight: {
                type：String,
            },
            left: {
                type: String,
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
                const font = Object.assign({
                    text: this.text,
                    width: this.width,
                    lineHeight: this.lineHeight,
                    lineNum: this.lineNum,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    left: '...',
                }, userConfig);
                this.textArr = core(font);
            }
        },
        beforeMount() {
            this.init();
        }
    };
</script>
