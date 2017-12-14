export const userConfig = {
    width: '50px',
    lineNum: 2,
    fontFamily: 'microsoft yahei',
    fontWeight: 'bold',
    left: '...',
};

export const assignConfig = (conf) => {
    Object.assign(userConfig, conf);
};
