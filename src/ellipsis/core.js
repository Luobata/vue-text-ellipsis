const getLength = (ctx, font = {}) => {
    const weight = font.fontWeight;
    const size = font.size || '12px';
    const family = font.fontFamily;
    ctx.font = `${weight} ${size} ${family}`;

    return ctx.measureText(font.value).width;
};

export default (font = {}) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let beginLine = 1;
    let index = 0;
    const line = [];

    for (let i = 0; i < font.text.length; i++) {
        if (beginLine > font.lineNum) break;
        const left = beginLine === font.lineNum ? font.left : '';
        const str = font.text.substr(index, i) + left;
        const len = getLength(ctx,
            Object.assign({ value:  str}, font));
        if (len <= parseInt(font.width, 10)) {
            line[beginLine - 1] = str;
        } else {
            beginLine++;
            index = i;
        }
    }

    return line;
};
