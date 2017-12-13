import vue from 'vue';
import vueResource from 'vue-resource';
import app from './app.vue';
import ellipsis from '../src/index_global';

vue.config.devtools = true;
vue.use(vueResource);
vue.use(ellipsis);

new vue({
    el: '#app',
    render (fn) {
        return fn(app);
    }
});
