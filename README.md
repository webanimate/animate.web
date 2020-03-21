# Animate.web

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/animate.web.svg)](https://www.npmjs.com/package/animate.web)
[![](https://img.shields.io/bundlephobia/minzip/animate.web.svg)](https://bundlephobia.com/result?p=animate.web)
[![Dependencies Status](https://david-dm.org/webanimate/animate.web.svg?theme=shields.io)](https://david-dm.org/webanimate/animate.web)
[![devDependencies Status](https://david-dm.org/webanimate/animate.web/dev-status.svg?theme=shields.io)](https://david-dm.org/webanimate/animate.web?type=dev)
[![Build Status](https://travis-ci.org/webanimate/animate.web.svg?branch=master)](https://travis-ci.org/webanimate/animate.web)

[Animate.css](https://github.com/daneden/animate.css) animations ported to [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

[DEMO](https://webanimate.github.io/animate.web/) and its [source code](https://github.com/webanimate/animate.web/blob/master/index.html).

Properties in animations keyframes are sorted according to a convention:

First goes `offset` property (if present), then `easing` (if present), then `composite` (if present), then animatable CSS properties in alphabetical order (with exception of `cssOffset` which is sorted as if it was `offset`).

Options are sorted alphabetically.

## Install

```
$ yarn add animate.web
```

or

```
$ npm install animate.web
```

## Usage

Import:

```javascript
import animateweb from 'animate.web'
```

Or load from CDN:

```html
<!-- Either -->
<script src="https://unpkg.com/animate.web"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/animate.web@latest/dist/animate.web.js"></script>
```

If you need only one or several animations it is possible to load them individually via CDN. For example, if you only need `bounceIn`, `flash` and `flip`:

```html
<script src="https://cdn.jsdelivr.net/npm/animate.web@latest/dist/bounceIn.js"></script>
<script src="https://cdn.jsdelivr.net/npm/animate.web@latest/dist/flash.js"></script>
<script src="https://cdn.jsdelivr.net/npm/animate.web@latest/dist/flip.js"></script>
```

Assign a selector to the element(s) you want to animate:

```html
<div id="animation">Animate me!</div>
```

Create animation with default options:

```javascript
const animation = document.querySelector('#animation').animate(animateweb.bounceIn.keyframes, animateweb.bounceIn.options)
```

Or apply any custom options if you need. Full list of available options [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)

For example, change duration to 3 seconds and play it infinitely:

```javascript
animateweb.bounceIn.options.duration = 3000
animateweb.bounceIn.options.iterations = Infinity
const animation = document.querySelector('#animation').animate(animateweb.bounceIn.keyframes, animateweb.bounceIn.options)
```

After being created the animation will play immediately. If you want to prevent this use `cancel()` method right after the creation:

```javascript
const animation = document.querySelector('#animation').animate(animateweb.bounceIn.keyframes, animateweb.bounceIn.options)
animation.cancel()
```

Use all available properties, methods and event handlers of the animation. Full list [here](https://developer.mozilla.org/en-US/docs/Web/API/Animation)

For example, play animation on click:

```html
<button onclick="animation.play()">Play</button>
```

#### Categories

Animations are sorted into categories via `animateweb.categories` property that allows infinite levels of sub-categories.

`animateweb.categories` is an object of "key: value" pairs where `value` can be either `true` or `object` itself.

If `value === true`, then `key` is the name an animation. If `value` is an object (not an array) then `key` is the name of a sub-category. Each sub-category is the same object of "key: value" pairs structure, so they can be infinite.

To view an example of how you can create expandable menu from the `categories` object search for `categories-menu` in demo [source code](https://github.com/webanimate/animate.web/blob/master/index.html). It is written as a recursive Vue component.

# Development

Build the bundle for browsers into `./dist` folder:

```shell script
yarn build
```

Rebuild the bundle when its source files change on disk:

```shell script
yarn watch
```

Lint:

```shell script
yarn lint
```

Fix linting and style errors:

```shell script
yarn fix
```

Update dependencies:

```shell script
yarn up
```

## Testing

Run both unit and integration tests:

```shell script
yarn test
```

#### Unit tests

They check integrity of animations and categories and make sure that all animations keyframes and options contain only allowed attributes. Command to run unit tests only:

```shell script
yarn test:unit
```

Here's what is checked in unit tests:

1. Each keyframe of each animation is tested to contain only [alowed attributes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats), that is one or more of [animatable CSS properties](https://www.npmjs.com/package/animatable-properties) and (optionally) `offset`, `easing`, `composite`.
1. Attributes are tested to be sorted according to the convention (see above).
1. If `offset` attribute is present in a keyframe it is tested to be a number between 0 and 1.
1. If `offset` attributes are present in several keyframes they are tested to be in ascending order.
1. If `easing` attribute is present in a keyframe it is tested to be valid [CSS easing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).
1. If `composite` attribute is present in a keyframe it is tested to be valid [KeyframeEffect.composite operation](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite).
1. Animation's options are tested to be valid [WAAPI timing properties](https://www.npmjs.com/package/waapi-timing-properties).
1. Animation's options are tested to be in alphabetical order.
1. Categories object (if present) is tested to be valid.

An example of passed unit tests:

![image](https://user-images.githubusercontent.com/60752454/76498866-63054700-6446-11ea-8e68-c139bb0e7134.png)

#### Integration tests

They check animations in real browser (headless Chrome via puppeteer). Command to run integration tests only:

```shell script
yarn test:integration
```

Unit tests cannot detect errors such as invalid value for a css property (e.g. `transform: translate3d(10)` ). So in this case unit tests will pass but integration will fail:

![image](https://user-images.githubusercontent.com/60752454/77083544-5d8b9c00-6a06-11ea-9508-e9e3893e56ea.png)

Cypress integration tests are also included but they are just for demonstration because cypress cannot catch console warnings, only errors (PRs welcomed if you know how do it).
Run cypress tests in headless:

```shell script
yarn cy:run
```

or headed mode:

```shell script
yarn cy:open
```
