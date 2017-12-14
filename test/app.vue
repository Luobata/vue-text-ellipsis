<template lang="pug">
    div
        ellipsis(text="这是一句很长的话，真的很长很长很长,到底有多长呢，你来猜猜看" line-height="14px" :line-num="2" tagName="p" :fontWeight="100" fontSize="16px" :left="left")
        //ellipsis.ell(:text="text" width="80px" line-height="14px" :line-num="1" tagName="p" :fontWeight="100" fontSize="16px" :left="left")
        //span.top(ref="top") {{ left }}
</template>
<style lang="styl">
    .top
        margin 20px
        font-family microsoft yahei
    .ell
        width 80px
</style>
<script>
    export default {
        data() {
            return {
                left: '...',
                text: 'xxxa a a s sxxadsaadsssssssssssdfdsfxcvxvc'
            };
        },
        methods: {
            changeCity (city) {
                console.log(city);
            }
        },
        mounted() {
            //const len = this.$refs['top'].offsetWidth;
            //console.log(len);
        },
    };
</script>
