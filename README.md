# Animate.web

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/animate.web.svg)](https://www.npmjs.com/package/animate.web)
[![](https://img.shields.io/bundlephobia/minzip/animate.web.svg)](https://bundlephobia.com/result?p=animate.web)

[Animate.css](https://github.com/daneden/animate.css) animations ported to Web Animations API.

This is alpha. Please don't use it. Stable version coming very soon.

[DEMO](https://webanimate.github.io/animate.web/) and its [source code](https://github.com/webanimate/animate.web/blob/master/index.html).

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

## Testing

Run tests:

```shell script
yarn test
```

Unit tests check integrity of animations and categories and make sure that all animations keyframes and options contain only allowed attributes.

Here's what is checked in unit tests:

1. Each keyframe of each animation is tested to contain only [alowed attributes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats), that is one or more of [animatable CSS properties](https://www.npmjs.com/package/animatable-properties) and (optionally) `offset`, `easing`, `composite`.
1. If `offset` attribute is present in a keyframe it is tested to be a number between 0 and 1.
1. If `offset` attributes are present in several keyframes they are tested to be in ascending order.
1. If `easing` attribute is present in a keyframe it is tested to be valid [CSS easing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).
1. If `composite` attribute is present in a keyframe it is tested to be valid [KeyframeEffect.composite operation](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite).
1. Animation's options are tested to be valid [WAAPI timing properties](https://www.npmjs.com/package/waapi-timing-properties).
1. Categories object (if present) is tested to be valid.

An example of passed unit tests:

![image](https://user-images.githubusercontent.com/60752454/76156345-cd924c00-6101-11ea-8e6f-17cb3ff3030a.png)
