import vue from 'vue';
import vueResource from 'vue-resource';
import app from './app.vue';

vue.config.devtools = true;
vue.use(vueResource);

new vue({
    el: '#app',
    render (fn) {
        return fn(app);
    }
});
