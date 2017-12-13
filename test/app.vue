<template>
    <div>
        <ecology-header
            siteName='看房团管理后台'
            userName='罗比塔'
            @changeCity='changeCity'
            ></ecology-header>
    </div>
</template>
<style scoped>
    #app {
        height: 100%;
    }
</style>
<script>
    import ecologyHeader from '../dist/header';
    export default {
        components: {
            ecologyHeader
        },
        methods: {
            changeCity (city) {
                console.log(city);
            }
        }
    };
</script>
