import app from './ellipsis/ellipsis.vue';

const install = (Vue) => {
    Vue.component(app.name, app);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
};
// module.exports = {
//    install
// };
