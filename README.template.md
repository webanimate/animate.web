# {{pkgNameUCFirst}}

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/{{pkg.name}}.svg)](https://www.npmjs.com/package/{{pkg.name}})
[![](https://img.shields.io/bundlephobia/minzip/{{pkg.name}}.svg)](https://bundlephobia.com/result?p={{pkg.name}})
[![Dependencies Status](https://david-dm.org/{{githubUsername}}/{{pkg.name}}.svg?theme=shields.io)](https://david-dm.org/{{githubUsername}}/{{pkg.name}})
[![devDependencies Status](https://david-dm.org/{{githubUsername}}/{{pkg.name}}/dev-status.svg?theme=shields.io)](https://david-dm.org/{{githubUsername}}/{{pkg.name}}?type=dev)
[![Build Status](https://travis-ci.org/{{githubUsername}}/{{pkg.name}}.svg?branch=master)](https://travis-ci.org/{{githubUsername}}/{{pkg.name}})

[Animate.css](https://github.com/daneden/animate.css) animations ported to [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

[DEMO](https://{{githubUsername}}.github.io/{{pkg.name}}/) and its [source code](https://github.com/{{githubUsername}}/{{pkg.name}}/blob/master/index.html).

Properties in animations keyframes are sorted according to a convention:

First goes `offset` property (if present), then `easing` (if present), then `composite` (if present), then animatable CSS properties in alphabetical order (with exception of `cssOffset` which is sorted as if it was `offset`).

Options are sorted alphabetically.

## Install

```
$ yarn add {{pkg.name}}
```

or

```
$ npm install {{pkg.name}}
```

## Usage

Import:

```javascript
import {{pkg.outputName}} from '{{pkg.name}}'
```

Or load from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/{{pkg.name}}@latest/dist/{{pkg.name}}.js"></script>
```

If you need only one or several animations it is possible to load them individually via CDN. For example, if you only need `bounceIn`, `flash` and `flip`:

```html
<script src="https://cdn.jsdelivr.net/npm/{{pkg.name}}@latest/dist/bounceIn.js"></script>
<script src="https://cdn.jsdelivr.net/npm/{{pkg.name}}@latest/dist/flash.js"></script>
<script src="https://cdn.jsdelivr.net/npm/{{pkg.name}}@latest/dist/flip.js"></script>
```

When loading from CDN a global variable `{{pkg.outputName}}` is added to the scope. If you load the full bundle `{{pkg.outputName}}` contains all the animations from the package. If individual animations are loaded it contains only them.

Assign a selector to the element(s) you want to animate:

```html
<div id="animation">Animate me!</div>
```

Create animation with default options:

```javascript
const animation = document.querySelector('#animation').animate({{pkg.outputName}}['bounceIn'].keyframes, {{pkg.outputName}}['bounceIn'].options)
```

Or apply any custom options if you need. Full list of available options [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)

For example, change duration to 3 seconds and play it infinitely:

```javascript
{{pkg.outputName}}['bounceIn'].options.duration = 3000
{{pkg.outputName}}['bounceIn'].options.iterations = Infinity
const animation = document.querySelector('#animation').animate({{pkg.outputName}}['bounceIn'].keyframes, {{pkg.outputName}}['bounceIn'].options)
```

After being created the animation will play immediately. If you want to prevent this use `cancel()` method right after the creation:

```javascript
const animation = document.querySelector('#animation').animate({{pkg.outputName}}['bounceIn'].keyframes, {{pkg.outputName}}['bounceIn'].options)
animation.cancel()
```

Use all available properties, methods and event handlers of the animation. Full list [here](https://developer.mozilla.org/en-US/docs/Web/API/Animation)

For example, play animation on click:

```html
<button onclick="animation.play()">Play</button>
```

#### Categories

Animations are sorted into categories via `{{pkg.outputName}}.categories` property that allows infinite levels of sub-categories.

`{{pkg.outputName}}.categories` is an object of "key: value" pairs where `value` can be either `true` or `object` itself.

If `value === true`, then `key` is the name an animation. If `value` is an object (not an array) then `key` is the name of a sub-category. Each sub-category is the same object of "key: value" pairs structure, so they can be infinite.

To view an example of how you can create expandable menu from the `categories` object search for `categories-menu` in demo [source code](https://github.com/{{githubUsername}}/{{pkg.name}}/blob/master/index.html). It is written as a recursive Vue component.

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

Generate changelog based on commit messages:

```shell script
yarn c
```

To use the above command [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) must be installed globally. Follow [the recommended workflow](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#recommended-workflow).

## Testing

```shell script
yarn test
```

[Source](https://github.com/{{githubUsername}}/{{pkg.name}}/blob/master/test/index.test.js)

Tests check integrity of animations and categories and make sure that all animations keyframes and options contain only allowed attributes.

Here's what is checked:

1. Animation name is a valid filename.
1. Each keyframe of each animation contains only [alowed attributes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats), that is one or more of [animatable CSS properties](https://www.npmjs.com/package/animatable-properties) and (optionally) `offset`, `easing`, `composite`.
1. Attributes are sorted according to the convention (see above).
1. `offset` attribute (if present in a keyframe) is a number between 0 and 1.
1. `offset` attributes (if present in several keyframes) are in ascending order.
1. `easing` attribute (if present in a keyframe) is a valid [CSS easing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).
1. `composite` attribute (if present in a keyframe) is a valid [KeyframeEffect.composite operation](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite).
1. Animation's options are valid [WAAPI timing properties](https://www.npmjs.com/package/waapi-timing-properties).
1. Animation's options are in alphabetical order.
1. The first and last keyframes contain all animatable properties used in animation. If they don't you get `Uncaught DOMException: Failed to execute 'animate' on 'Element': Partial keyframes are not supported.` in Chrome or `NotSupportedError: Animation to or from an underlying value is not yet supported.` in Firefox.
   Starting from [Firefox 75](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/) such cases [do not trigger errors anymore](https://mdn.github.io/dom-examples/web-animations-api/#implicit-tofrom-keyframes). So if other major browsers also implement this feature, this part of the tests will be removed in the future.
1. Every animatable CSS property has a valid value.
1. Categories object (if present) is valid.

An example of passed unit tests:

![image](https://user-images.githubusercontent.com/60752454/79008358-80b8ef80-7b5d-11ea-804c-29b44137794e.png)
