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

####Categories
Animations are sorted into categories via `animateweb.categories` property that allows infinite levels of sub-categories.

To view an example of how you can create expandable menu from the `categories` object search for `categories-menu` in demo [source code](https://github.com/webanimate/animate.web/blob/master/index.html). It is written as a recursive Vue component.
