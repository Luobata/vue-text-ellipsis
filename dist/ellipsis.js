(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ellipsis = factory());
}(this, (function () { 'use strict';

// const getLengthByCanvas = (ctx, font = {}) => {
//     const weight = font.fontWeight;
//     const size = font.fontSize;
//     const family = font.fontFamily;
//     ctx.font = `${weight} ${size} ${family}`;

//     return ctx.measureText(font.value).width;
// };
const getLengthByDom = (span, font = {}) => {
    // TODO 增加style样式
    span.innerText = font.value;
    return span.offsetWidth;
};

var core = (font = {}, span) => {
    let beginLine = 1;
    let index = 0;
    const line = [];

    for (let i = 0; i <= font.text.length; i++) {
        if (beginLine > font.lineNum) break;
        const left = beginLine === parseInt(font.lineNum, 10) ? font.left : '';
        const str = font.text.substr(index, i - index) + left;
        const len = getLengthByDom(
            span,
            Object.assign({ value: str }, font),
        );
        // console.log(str, len);
        if (len <= parseFloat(font.width, 10)) {
            line[beginLine - 1] = str;
        } else {
            i--;
            beginLine++;
            index = i;
        }
    }

    return line;
};

var userConfig = {
    width: '50px',
    lineNum: 2,
    fontFamily: 'microsoft yahei',
    fontWeight: 'bold',
    fontSize: '14px',
    left: '...',
    tagName: 'p',
    isImmediate: true
};

var assignConfig = function assignConfig(conf) {
    Object.assign(userConfig, conf);
};

//import core from './core';
var app = {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c("div");
    },
    staticRenderFns: [],
    name: 'ellipsis',
    props: {
        text: {
            type: String,
            default: ''
        },
        width: {
            type: String
        },
        //lineHeight: {
        //    type: String,
        //    default: '14px',
        //},
        lineNum: {
            type: Number
        },
        fontFamily: {
            type: String
        },
        fontWeight: {
            type: String | Number
        },
        fontSize: {
            type: String
        },
        left: {
            type: String
        },
        tagName: {
            type: String,
            default: userConfig.tagName
        },
        isImmediate: {
            type: Boolean,
            default: userConfig.isImmediate
        }
    },
    data: function data() {
        return {
            textArr: [],
            span: '',
            parentWidth: ''
        };
    },

    watch: {
        width: function width() {
            this.update();
        }
    },
    methods: {
        init: function init() {
            // 初始化
            this.span = document.createElement('span');
            this.span.style.opacity = 0;
            this.span.style['white-space'] = 'nowrap';
            this.span.style['font-weight'] = this.fontWeight || userConfig.fontWeight;
            this.span.style['font-family'] = this.fontFamily || userConfig.fontFamily;
            this.span.style['font-size'] = this.fontSize || userConfig.fontSize;
            document.body.append(this.span);
            var font = {
                text: this.text,
                width: this.parentWidth || parseFloat(getComputedStyle(this.$el.parentElement).width, 10),
                lineHeight: this.lineHeight || userConfig.lineHeight,
                lineNum: this.lineNum || userConfig.lineNum,
                fontFamily: this.fontFamily || userConfig.fontFamily,
                fontSize: this.fontSize || userConfig.fontSize,
                fontWeight: this.fontWeight || userConfig.fontWeight,
                left: this.left || userConfig.left
            };
            this.textArr = core(font, this.span);
            this.destory();
        },
        destory: function destory() {
            this.span.remove();
            this.span = '';
        },
        update: function update() {
            this.init();
        }
    },
    beforeMount: function beforeMount() {
        if (this.width) {
            this.parentWidth = this.width;
            this.init();
        }
    },
    mounted: function mounted() {
        var _this = this;

        if (!this.width) {
            this.parentWidth = parseFloat(getComputedStyle(this.$el.parentElement).width, 10);
            this.init();
            var min = 1000;
            var timeout = void 0;
            var begin = new Date().getTime();
            var that = this;
            window.addEventListener('resize', function () {
                if (that.parentWidth === parseFloat(getComputedStyle(_this.$el.parentElement).width, 10)) return;
                that.parentWidth = parseFloat(getComputedStyle(_this.$el.parentElement).width, 10);
                if (that.isImmediate) {
                    that.init();
                } else {
                    var now = new Date().getTime();
                    if (now - begin < min) {
                        timeout = setTimeout(function () {
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
    destroyed: function destroyed() {}
};

var install = function install(Vue, conf) {
    Vue.component(app.name, app);
    if (conf) {
        assignConfig(conf);
    }
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var index_global = {
    install: install
};
// module.exports = {
//    install
// };

return index_global;

})));
//# sourceMappingURL=ellipsis.js.map
