# text input
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/text-input/nodejs.yml?style=flat-square)](https://github.com/substrate-system/text-input/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/text-input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](https://common-changelog.org)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/text-input?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/text-input)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


A text input web component.

[See a live demo](https://substrate-system.github.io/text-input/).

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [CSS](#css)
  * [Import CSS](#import-css)
  * [Customize CSS via some variables](#customize-css-via-some-variables)
- [Use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built JS](#pre-built-js)

<!-- tocstop -->

</details>

## Install

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

### Import CSS

```js
import '@substrate-system/text-input/css'
```

Or minified:
```js
import '@substrate-system/text-input/css/min'
```

### Customize CSS via some variables

```css
text-input {
    --text-input-error-border: pink;
    --gray-text: #999999;
    --radius: 4px;
}
```

## Use

This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/text-input'
import '@substrate-system/text-input/css'
```

>
> [!NOTE]
> The `name` attribute is used as an `id` also, so it should be unique
> per page.
>

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
This package exposes minified files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/text-input/dist/index.min.js ./public/text-input.js
cp ./node_modules/@substrate-system/text-input/dist/style.min.css ./public/text-input.css
```

#### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./text-input.css">
</head>

<body>
    <!-- use the tag -->
    <text-input
        display-name="text input component"
        title="At least 3 letters, but less than 7"
        required
        minlength=3
        maxlength=7
        name="text-input"
    ></text-input>

    <!-- JS -->
    <script type="module" src="./text-input.js"></script>
</body>
</html>
```
