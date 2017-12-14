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
                type: String,
            },
            fontWeight: {
                type: String | Number,
            },
            fontSize: {
                type: String,
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
                textArr: [],
                span: '',
            };
        },
        methods: {
            init() {
                // 初始化
                this.span  = document.createElement('span');
                this.span.style.opacity = 0;
                this.span.style['white-space'] = 'nowrap';
                document.body.append(this.span);
                const font = {
                    text: this.text,
                    width: this.width || this.$el.parentElement.offsetWidth,
                    lineHeight: this.lineHeight || userConfig.lineHeight,
                    lineNum: this.lineNum || userConfig.lineNum,
                    fontFamily: this.fontFamily || userConfig.fontFamily,
                    fontSize: this.fontSize || userConfig.fontSize,
                    fontWeight: this.fontWeight || userConfig.fontWeight,
                    left: this.left || userConfig.left,
                };
                this.textArr = core(font, this.span);
                //this.destory();
            },
            destory() {
                this.span.remove();
                this.span = '';
            },
        },
        beforeMount() {
            if (this.width) {
                this.init();
            }
        },
        mounted() {
            if (!this.width) {
                this.init();
            }
        },
        destroyed() {
        },
    };
</script>
