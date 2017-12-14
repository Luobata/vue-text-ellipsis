const getLengthByCanvas = (ctx, font = {}) => {
    const weight = font.fontWeight;
    const size = font.fontSize;
    const family = font.fontFamily;
    ctx.font = `${weight} ${size} ${family}`;

    return ctx.measureText(font.value).width;
};
const getLengthByDom = (span, font = {}) => {
    // TODO 增加style样式
    span.innerText = font.value;
    return span.offsetWidth;
};

export default (font = {}, span) => {
    //const canvas = document.createElement('canvas');
    //const ctx = canvas.getContext('2d');
    //const span = document.createElement('span');
    let beginLine = 1;
    let index = 0;
    const line = [];

    for (let i = 0; i < font.text.length; i++) {
        if (beginLine > font.lineNum) break;
        const left = beginLine === font.lineNum ? font.left : '';
        const str = font.text.substr(index, i - index) + left;
        const len = getLengthByDom(span,
            Object.assign({ value:  str}, font));
        //console.log(str, len);
        if (len <= parseInt(font.width, 10)) {
            line[beginLine - 1] = str;
        } else {
            i--;
            beginLine++;
            index = i;
        }
    }

    return line;
};
