'use strict'
const utils = require('./util')
//const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
//const sourceMapEnabled = isProduction
//  ? config.build.productionSourceMap
//  : config.dev.cssSourceMap
const sourceMapEnabled = true;

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  //cacheBusting: config.dev.cacheBusting,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
