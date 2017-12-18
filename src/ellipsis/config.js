export const userConfig = {
    width: '50px',
    lineNum: 2,
    fontFamily: 'microsoft yahei',
    fontWeight: 'bold',
    fontSize: '14px',
    left: '...',
    tagName: 'p',
    isImmediate: true,
};

export const assignConfig = (conf) => {
    Object.assign(userConfig, conf);
};
