import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path';
import vue from 'rollup-plugin-vue2';
import url from 'rollup-plugin-url';

const root = path.resolve(__dirname, './');

module.exports = {
    input: 'src/index_global.js',
    name: 'ellipsis',
    sourcemap: true,
    output: {
        file: 'dist/ellipsis.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        commonjs(),
        vue({
            css: true
        }),
        url(),
        babel({
            exclude: 'node_modules/**',
        }),
        //uglify(),
        alias({
            UI: path.resolve(__dirname, '../src/ui'),
            EVENT: path.resolve(__dirname, '../src/event')
        })
    ]
// output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
};
