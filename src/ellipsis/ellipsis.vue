<template lang="pug">
    div.ellipsis-wrap
        p.ellipsis(v-if="tagName === 'p'" v-for="item in textArr") {{ item }}
        span.ellipsis(v-if="tagName === 'span'" v-for="item in textArr") {{ item }}
        li.ellipsis(v-if="tagName === 'li'" v-for="item in textArr") {{ item }}
</template>
<style lang="styl">
</style>
<script>
    //import core from './core';
    import core from 'text-ellipsis-core';
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
            //lineHeight: {
            //    type: String,
            //    default: '14px',
            //},
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
            },
            isImmediate: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                textArr: [],
                span: '',
                parentWidth: '',
            };
        },
        watch: {
            width: function () {
                console.log(1);
            }
        },
        methods: {
            init() {
                // 初始化
                this.span  = document.createElement('span');
                this.span.style.opacity = 0;
                this.span.style['white-space'] = 'nowrap';
                this.span.style['font-weight'] = this.fontWeight || userConfig.fontWeight;
                this.span.style['font-family'] = this.fontFamily || userConfig.fontFamily;
                this.span.style['font-size'] = this.fontSize|| userConfig.fontSize;
                document.body.append(this.span);
                const font = {
                    text: this.text,
                    width: this.parentWidth || this.$el.parentElement.offsetWidth,
                    lineHeight: this.lineHeight || userConfig.lineHeight,
                    lineNum: this.lineNum || userConfig.lineNum,
                    fontFamily: this.fontFamily || userConfig.fontFamily,
                    fontSize: this.fontSize || userConfig.fontSize,
                    fontWeight: this.fontWeight || userConfig.fontWeight,
                    left: this.left || userConfig.left,
                };
                this.textArr = core(font, this.span);
                this.destory();
            },
            destory() {
                this.span.remove();
                this.span = '';
            },
            update() {
                this.init();
            },
        },
        beforeMount() {
            if (this.width) {
                this.parentWidth = this.width;
                this.init();
            }
        },
        mounted() {
            if (!this.width) {
                this.parentWidth = this.$el.parentElement.offsetWidth;
                this.init();
                const min = 1000;
                let timeout;
                let begin = new Date().getTime();
                const that = this;
                window.addEventListener('resize', () => {
                    if (that.parentWidth === that.$el.parentElement.offsetWidth) return;
                    that.parentWidth = that.$el.parentElement.offsetWidth;
                    if (that.isImmediate) {
                        that.init();
                    } else {
                        const now = new Date().getTime();
                        if (now - begin < min) {
                            timeout = setTimeout(() => {
                                that.init.call(that);
                                begin = now;
                            }, now - begin);
                        } else {
                            timeout = null;
                            clearTimeout(timeout);
                            that.init();
                            begin = now;
                        }
                    }
                });
            }
        },
        destroyed() {
        },
    };
</script>
