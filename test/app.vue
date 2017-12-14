<template lang="pug">
    div
        ellipsis(text="这是一句很长的话，真的很长很长很长" width="40px" line-height="14px" :line-num="1" tagName="p" :fontWeight="100" fontSize="16px" left=".")
        span.top .
</template>
<style lang="styl">
    .top
        margin 20px
</style>
<script>
    export default {
        methods: {
            changeCity (city) {
                console.log(city);
            }
        }
    };
</script>
