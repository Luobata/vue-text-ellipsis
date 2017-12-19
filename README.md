# text-ellipsis
a text-ellipsis plugin both with Vue.

## Intro
The situation when you need text ellipsis more then one line and the browser doesn't support the css style `-webkit-line-clamp`.

## Install
```
npm install --save-dev vue-text-ellipsis
```

## Link
If you are using without Vue, use the package with dom-based situation.[dom-text-ellipsis](https://github.com/Luobata/dom-text-ellipsis) instead.

## Usage
```js
import vue-text-ellipsis from 'vue-text-ellipsis';

vue.use(vue-text-ellipsis, {
    width: '50px',
    lineNum: 2,
    fontFamily: 'microsoft yahei',
    fontWeight: 'bold',
    fontSize: '14px',
    left: '...',
    tagName: 'p',
    isImmediate: true,
});
```

add the vue element in your `.vue`.
```html
ellipsis(text="这是一句很长的话，真的很长很长很长,到底有多长呢，你来猜猜看" :line-num="2" tagName="p" :fontWeight="100" fontSize="16px" :left="left" :isImmediate="false")
```

## Config
You can add config when `vue.use` to set global-config or use the props on vue elempent.

## Property

| Props       | Type            | Default                                 | Effect                                   |
| ----------- | --------------- | --------------------------------------- | ---------------------------------------- |
| width       | String          | The parentsElement's offsetWidth.       | The max width for one line.              |
| lineNum     | Number          | 2    (from global config)               | The max line.                            |
| fontFamily  | String          | microsoft yahei    (from global config) | The fontFamily to calculate the width.   |
| fontSize    | String\| Number | 14px    (from global config)            | The fontSize to calculate the width.     |
| tagName     | String          | p    (from global config)               | The tag to show the text.(**only span p li **)                |
| left        | String          | '…'    (from global config)             | The String add on the end of the last line. |
| isImmediate | Boolean         | true    (from global config)            | Update the text when the width change immediate or not(like debounce). |

## Methods

| Methods | Args | Effect                           |
| ------- | ---- | -------------------------------- |
| update  |      | Recalculate and update the text. |

