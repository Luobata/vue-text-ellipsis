<template lang="pug">
    ellipsis(text="这是一句很长的话，真的很长很长很长" width="30px" line-height="14px" :line-num="2" tagName="p")
</template>
<style scoped>
    #app {
        height: 100%;
    }
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
