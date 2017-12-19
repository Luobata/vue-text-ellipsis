import vue from 'vue';
import vueResource from 'vue-resource';
import app from './app.vue';
//import ellipsis from '../src/index_global';
import ellipsis from '../dist/ellipsis';

vue.config.devtools = true;
vue.use(vueResource);
vue.use(ellipsis, {
    fontSize: '50px',
});

new vue({
    el: '#app',
    render (fn) {
        return fn(app);
    }
});
