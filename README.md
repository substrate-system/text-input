# text input
![tests](https://github.com/substrate-system/text-input/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/text-input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A text input web component.

## install

Installation instructions

```sh
npm i -S @substrate-system/text-input
```

## API
This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/text-input'
```

### Common JS
```js
require('@substrate-system/text-input')
```

## CSS
Customize CSS via some variables

```css
:root {
    --text-input-error-border: pink;
    --gray-text: #999999;
    --radius: 4px;
}
```

## use

This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/text-input'
```

### HTML
```html
<div>
    <text-input
        display-name="text input component"
        title="At least 3 letters, but less than 7"
        required
        minlength=3
        maxlength=7
        name="text-input"
    ></text-input>
</div>
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/text-input/dist/index.min.js ./public/text-input.js
```

#### HTML
```html
<script type="module" src="./text-input.js"></script>
```
