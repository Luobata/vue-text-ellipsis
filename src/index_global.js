import app from './ellipsis/ellipsis.vue';
import { assignConfig } from './ellipsis/config';

const install = (Vue, conf) => {
    Vue.component(app.name, app);
    if (conf) {
        assignConfig(conf);
    }
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
