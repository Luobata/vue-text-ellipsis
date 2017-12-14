export const userConfig = {
    width: '50px',
    lineNum: 2,
    fontFamily: 'MicrosoftYahei',
    fontWeight: 'bold',
    fontSize: '14px',
    left: '...',
};

export const assignConfig = (conf) => {
    Object.assign(userConfig, conf);
};
