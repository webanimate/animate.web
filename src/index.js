export default {
  bounce: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', transformOrigin: 'center bottom' },
      { offset: 0.2, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
      { offset: 0.4, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
      { offset: 0.43, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
      { offset: 0.53, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
      { offset: 0.7, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -15px, 0) scaleY(1.05)' },
      { offset: 0.8, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0) scaleY(0.95)' },
      { offset: 0.9, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -4px, 0) scaleY(1.02)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', transformOrigin: 'center bottom' },
    ],
    options: {
      duration: 1000,
    },
  },

  flash: {
    keyframes: [
      { easing: 'ease', opacity: 1 }, //
      { easing: 'ease', opacity: 0 },
      { easing: 'ease', opacity: 1 },
      { easing: 'ease', opacity: 0 },
      { opacity: 1 },
    ],
    options: {
      duration: 1000,
    },
  },

  headShake: {
    keyframes: [
      { offset: 0.0, easing: 'ease-in-out', transform: 'translateX(0)' },
      { offset: 0.065, easing: 'ease-in-out', transform: 'translateX(-6px) rotateY(-9deg)' },
      { offset: 0.185, easing: 'ease-in-out', transform: 'translateX(5px) rotateY(7deg)' },
      { offset: 0.315, easing: 'ease-in-out', transform: 'translateX(-3px) rotateY(-5deg)' },
      { offset: 0.435, easing: 'ease-in-out', transform: 'translateX(2px) rotateY(3deg)' },
      { offset: 0.5, easing: 'ease-in-out', transform: 'translateX(0)' },
      { offset: 1.0, transform: 'translateX(0)' },
    ],
    options: {
      duration: 1000,
    },
  },

  heartBeat: {
    keyframes: [
      { offset: 0.0, easing: 'ease-in-out', transform: 'scale(1)' },
      { offset: 0.14, easing: 'ease-in-out', transform: 'scale(1.3)' },
      { offset: 0.28, easing: 'ease-in-out', transform: 'scale(1)' },
      { offset: 0.42, easing: 'ease-in-out', transform: 'scale(1.3)' },
      { offset: 0.7, easing: 'ease-in-out', transform: 'scale(1)' },
      { offset: 1.0, transform: 'scale(1)' },
    ],
    options: {
      duration: 1300,
    },
  },

  jello: {
    keyframes: [
      { offset: 0.0, easing: 'ease', transform: 'translate3d(0, 0, 0)' },
      { offset: 0.111, easing: 'ease', transform: 'translate3d(0, 0, 0)' },
      { offset: 0.222, easing: 'ease', transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
      { offset: 0.333, easing: 'ease', transform: 'skewX(6.25deg) skewY(6.25deg)' },
      { offset: 0.444, easing: 'ease', transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
      { offset: 0.555, easing: 'ease', transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
      { offset: 0.666, easing: 'ease', transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
      { offset: 0.777, easing: 'ease', transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
      { offset: 0.888, easing: 'ease', transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' },
    ],
    options: {
      duration: 1000,
    },
  },

  pulse: {
    keyframes: [
      { easing: 'ease-in-out', transform: 'scale3d(1, 1, 1)' }, //
      { easing: 'ease-in-out', transform: 'scale3d(1.05, 1.05, 1.05)' },
      { transform: 'scale3d(1, 1, 1)' },
    ],
    options: {
      duration: 1000,
    },
  },

  rubberBand: {
    keyframes: [
      { offset: 0.0, easing: 'ease', transform: 'scale3d(1, 1, 1)' },
      { offset: 0.3, easing: 'ease', transform: 'scale3d(1.25, 0.75, 1)' },
      { offset: 0.4, easing: 'ease', transform: 'scale3d(0.75, 1.25, 1)' },
      { offset: 0.5, easing: 'ease', transform: 'scale3d(1.15, 0.85, 1)' },
      { offset: 0.65, easing: 'ease', transform: 'scale3d(0.95, 1.05, 1)' },
      { offset: 0.75, easing: 'ease', transform: 'scale3d(1.05, 0.95, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)' },
    ],
    options: {
      duration: 1000,
    },
  },

  shake: {
    keyframes: [
      { easing: 'ease', transform: 'translate3d(0, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(-10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(-10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(-10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(-10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(10px, 0, 0)' },
      { easing: 'ease', transform: 'translate3d(-10px, 0, 0)' },
      { transform: 'translate3d(0, 0, 0)' },
    ],
    options: {
      duration: 1000,
    },
  },

  swing: {
    keyframes: [
      { easing: 'ease', transform: 'rotate3d(0, 0, 1, 0deg)', transformOrigin: 'top center' },
      { easing: 'ease', transform: 'rotate3d(0, 0, 1, 15deg)' },
      { easing: 'ease', transform: 'rotate3d(0, 0, 1, -10deg)' },
      { easing: 'ease', transform: 'rotate3d(0, 0, 1, 5deg)' },
      { easing: 'ease', transform: 'rotate3d(0, 0, 1, -5deg)' },
      { transform: 'rotate3d(0, 0, 1, 0deg)', transformOrigin: 'top center' },
    ],
    options: {
      duration: 1000,
    },
  },

  tada: {
    keyframes: [
      { easing: 'ease', transform: 'scale3d(1, 1, 1)' },
      { easing: 'ease', transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
      { easing: 'ease', transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { transform: 'scale3d(1, 1, 1)' },
    ],
    options: {
      duration: 1000,
    },
  },

  wobble: {
    keyframes: [
      { offset: 0.0, easing: 'ease', transform: 'translate3d(0, 0, 0)' },
      { offset: 0.15, easing: 'ease', transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
      { offset: 0.3, easing: 'ease', transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
      { offset: 0.45, easing: 'ease', transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.6, easing: 'ease', transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
      { offset: 0.75, easing: 'ease', transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' },
    ],
    options: {
      duration: 1000,
    },
  },

  bounceIn: {
    keyframes: [
      { easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', visibility: 'visible' },
      { easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'scale3d(1.1, 1.1, 1.1)' },
      { easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'scale3d(0.9, 0.9, 0.9)' },
      { easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)' },
      { easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'scale3d(0.97, 0.97, 0.97)' },
      { opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 750,
    },
  },

  bounceInDown: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 0, transform: 'translate3d(0, -3000px, 0) scaleY(3)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 1, transform: 'translate3d(0, 25px, 0) scaleY(0.9)' },
      { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, -10px, 0) scaleY(0.95)' },
      { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 5px, 0) scaleY(0.985)' },
      { offset: 1.0, opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  bounceInLeft: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 0, transform: 'translate3d(-3000px, 0, 0) scaleX(3)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 1, transform: 'translate3d(25px, 0, 0) scaleX(1)' },
      { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(-10px, 0, 0) scaleX(0.98)' },
      { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(5px, 0, 0) scaleX(0.995)' },
      { offset: 1.0, opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  bounceInRight: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 0, transform: 'translate3d(3000px, 0, 0) scaleX(3)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 1, transform: 'translate3d(-25px, 0, 0) scaleX(1)' },
      { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(10px, 0, 0) scaleX(0.98)' },
      { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(-5px, 0, 0) scaleX(0.995)' },
      { offset: 1.0, opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  bounceInUp: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 0, transform: 'translate3d(0, 3000px, 0) scaleY(5)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
      { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
      { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
      { offset: 1.0, opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  bounceOut: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
      { offset: 0.2, easing: 'ease', transform: 'scale3d(0.9, 0.9, 0.9)' },
      { offset: 0.5, easing: 'ease', transform: 'scale3d(1.1, 1.1, 1.1)' },
      { offset: 0.55, easing: 'ease', opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', visibility: 'hidden' },
    ],
    options: {
      duration: 750,
      fill: 'forwards',
    },
  },

  bounceOutDown: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 0.2, easing: 'ease', transform: 'translate3d(0, 10px, 0) scaleY(0.985)' },
      { offset: 0.4, easing: 'ease', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
      { offset: 0.45, easing: 'ease', opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
      { offset: 1.0, opacity: 0, transform: 'translate3d(0, 2000px, 0) scaleY(3)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  bounceOutLeft: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 0.2, easing: 'ease', opacity: 1, transform: 'translate3d(20px, 0, 0) scaleX(0.9)' },
      { offset: 1.0, opacity: 0, transform: 'translate3d(-2000px, 0, 0) scaleX(2)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  bounceOutRight: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 0.2, easing: 'ease', opacity: 1, transform: 'translate3d(-20px, 0, 0) scaleX(0.9)' },
      { offset: 1.0, opacity: 0, transform: 'translate3d(2000px, 0, 0) scaleX(2)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  bounceOutUp: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 0.2, easing: 'ease', transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
      { offset: 0.4, easing: 'ease', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
      { offset: 0.45, easing: 'ease', opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
      { offset: 1.0, opacity: 0, transform: 'translate3d(0, -2000px, 0) scaleY(3)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeIn: {
    keyframes: [
      { easing: 'ease', opacity: 0, visibility: 'visible' }, //
      { opacity: 1, visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInDown: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(0, -100%, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInDownBig: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(0, -2000px, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInLeft: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInLeftBig: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(-2000px, 0, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInRight: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInRightBig: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(2000px, 0, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInUp: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeInUpBig: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(0, 2000px, 0)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  fadeOut: {
    keyframes: [
      { easing: 'ease', opacity: 1, visibility: 'visible' }, //
      { opacity: 0, visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutDown: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(0, 100%, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutDownBig: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(0, 2000px, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutLeft: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutLeftBig: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(-2000px, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutRight: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutRightBig: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(2000px, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutUp: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(0, -100%, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  fadeOutUpBig: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(0, -2000px, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  flip: {
    keyframes: [
      { offset: 0.0, easing: 'ease-out', transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)' },
      { offset: 0.4, easing: 'ease-out', transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)' },
      { offset: 0.5, easing: 'ease-in', transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)' },
      { offset: 0.8, easing: 'ease-in', transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' },
      { offset: 1.0, transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' },
    ],
    options: {
      duration: 1000,
    },
  },

  flipInX: {
    keyframes: [
      { offset: 0.0, easing: 'ease-in', opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', visibility: 'visible' },
      { offset: 0.4, easing: 'ease-in', transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
      { offset: 0.6, easing: 'ease', opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)' },
      { offset: 0.8, easing: 'ease', transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
      { offset: 1.0, opacity: 1, transform: 'perspective(400px)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  flipInY: {
    keyframes: [
      { offset: 0.0, easing: 'ease-in', opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', visibility: 'visible' },
      { offset: 0.4, easing: 'ease-in', transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)' },
      { offset: 0.6, easing: 'ease', opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)' },
      { offset: 0.8, easing: 'ease', transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
      { offset: 1.0, opacity: 1, transform: 'perspective(400px)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  flipOutX: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'perspective(400px)', visibility: 'visible' },
      { offset: 0.3, easing: 'ease', opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
      { offset: 1.0, opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', visibility: 'hidden' },
    ],
    options: {
      duration: 750,
      fill: 'forwards',
    },
  },

  flipOutY: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 1, transform: 'perspective(400px)', visibility: 'visible' },
      { offset: 0.3, easing: 'ease', opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)' },
      { offset: 1.0, opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', visibility: 'hidden' },
    ],
    options: {
      duration: 750,
      fill: 'forwards',
    },
  },

  lightSpeedIn: {
    keyframes: [
      { offset: 0.0, easing: 'ease-out', opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', visibility: 'visible' },
      { offset: 0.6, easing: 'ease-out', opacity: 1, transform: 'skewX(20deg)' },
      { offset: 0.8, easing: 'ease-out', transform: 'skewX(-5deg)' },
      { offset: 1.0, opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  lightSpeedOut: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,

      fill: 'forwards',
    },
  },

  rotateIn: {
    keyframes: [
      { easing: 'ease-in', opacity: 0, transform: 'rotate3d(0, 0, 1, -200deg)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rotateInDownLeft: {
    keyframes: [
      { easing: 'ease-in', opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)', transformOrigin: 'left bottom', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', transformOrigin: 'left bottom', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rotateInDownRight: {
    keyframes: [
      { easing: 'ease-in', opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', transformOrigin: 'right bottom', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', transformOrigin: 'right bottom', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rotateInUpLeft: {
    keyframes: [
      { easing: 'ease-in', opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', transformOrigin: 'left bottom', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', transformOrigin: 'left bottom', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rotateInUpRight: {
    keyframes: [
      { easing: 'ease-in', opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)', transformOrigin: 'right bottom', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', transformOrigin: 'right bottom', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rotateOut: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'rotate3d(0, 0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'rotate3d(0, 0, 1, 200deg)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,

      fill: 'forwards',
    },
  },

  rotateOutDownLeft: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'rotate3d(0, 0, 0, 0)', transformOrigin: 'left bottom', visibility: 'visible' },
      { opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', transformOrigin: 'left bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  rotateOutDownRight: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'rotate3d(0, 0, 0, 0)', transformOrigin: 'right bottom', visibility: 'visible' },
      { opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)', transformOrigin: 'right bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  rotateOutUpLeft: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'rotate3d(0, 0, 0, 0)', transformOrigin: 'left bottom', visibility: 'visible' },
      { opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)', transformOrigin: 'left bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  rotateOutUpRight: {
    keyframes: [
      { easing: 'ease-in', opacity: 1, transform: 'rotate3d(0, 0, 0, 0)', transformOrigin: 'right bottom', visibility: 'visible' },
      { opacity: 0, transform: 'rotate3d(0, 0, 1, 90deg)', transformOrigin: 'right bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  slideInDown: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, -100%, 0)', visibility: 'visible' }, //
      { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  slideInLeft: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' }, //
      { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  slideInRight: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(100%, 0, 0)', visibility: 'visible' }, //
      { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  slideInUp: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, 100%, 0)', visibility: 'visible' }, //
      { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  slideOutDown: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { transform: 'translate3d(0, 100%, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  slideOutLeft: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  slideOutRight: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  slideOutUp: {
    keyframes: [
      { easing: 'ease-in', transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { transform: 'translate3d(0, -100%, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  hinge: {
    keyframes: [
      { easing: 'ease-in-out', opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', transformOrigin: 'top left', visibility: 'visible' },
      { easing: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)' },
      { easing: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 60deg)' },
      { easing: 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)' },
      { easing: 'ease-in-out', opacity: 1, transform: 'rotate3d(0, 0, 1, 60deg)' },
      { opacity: 0, transform: 'translate3d(0, 700px, 0)', transformOrigin: 'top left', visibility: 'hidden' },
    ],
    options: {
      duration: 2000,
    },
  },

  jackInTheBox: {
    keyframes: [
      { offset: 0.0, easing: 'ease', opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom', visibility: 'visible' },
      { offset: 0.5, easing: 'ease', transform: 'rotate(-10deg)' },
      { offset: 0.7, easing: 'ease', transform: 'rotate(3deg)' },
      { offset: 1.0, opacity: 1, transform: 'scale(1)', transformOrigin: 'center bottom', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rollIn: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', visibility: 'visible' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  rollOut: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  zoomIn: {
    keyframes: [
      { easing: 'ease', opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', visibility: 'visible' }, //
      { opacity: 1 },
      { opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  zoomInDown: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)' },
      { offset: 1.0, opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  zoomInLeft: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)' },
      { offset: 1.0, opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  zoomInRight: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)' },
      { offset: 1.0, opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  zoomInUp: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)', visibility: 'visible' },
      { offset: 0.6, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)' },
      { offset: 1.0, opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
    ],
    options: {
      duration: 1000,
    },
  },

  zoomOut: {
    keyframes: [
      { easing: 'ease', opacity: 1, transform: 'scale3d(1, 1, 1)', visibility: 'visible' },
      { easing: 'ease', opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
      { opacity: 0, transform: 'scale3d(0, 0, 0)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  zoomOutDown: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(1, 1, 1) translateY(0px)', transformOrigin: 'center', visibility: 'visible' },
      { offset: 0.4, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateY(-60px)', transformOrigin: 'center' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateY(1000px)', transformOrigin: 'center bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  zoomOutLeft: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(1, 1, 1) translateX(0px)', visibility: 'visible' },
      { offset: 0.4, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateX(10px)' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateX(-1000px)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  zoomOutRight: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(1, 1, 1) translateX(0px)', visibility: 'visible' },
      { offset: 0.4, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateX(-10px)' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateX(1000px)', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  zoomOutUp: {
    keyframes: [
      { offset: 0.0, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', composite: 'replace', opacity: 1, transform: 'scale3d(1, 1, 1) translateY(0px)', transformOrigin: 'center', visibility: 'visible' },
      { offset: 0.4, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', composite: 'replace', opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateY(60px)', transformOrigin: 'center' },
      { offset: 1.0, composite: 'replace', opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateY(-1000px)', transformOrigin: 'center bottom', visibility: 'hidden' },
    ],
    options: {
      duration: 1000,
      fill: 'forwards',
    },
  },

  categories: {
    'Attention Seekers': {
      bounce: true,
      flash: true,
      pulse: true,
      rubberBand: true,
      shake: true,
      headShake: true,
      swing: true,
      tada: true,
      wobble: true,
      jello: true,
      heartBeat: true,
    },
    Bounce: {
      Entrances: {
        bounceIn: true,
        bounceInDown: true,
        bounceInLeft: true,
        bounceInRight: true,
        bounceInUp: true,
      },
      Exits: {
        bounceOut: true,
        bounceOutDown: true,
        bounceOutLeft: true,
        bounceOutRight: true,
        bounceOutUp: true,
      },
    },
    Fade: {
      Entrances: {
        fadeIn: true,
        fadeInDown: true,
        fadeInDownBig: true,
        fadeInLeft: true,
        fadeInLeftBig: true,
        fadeInRight: true,
        fadeInRightBig: true,
        fadeInUp: true,
        fadeInUpBig: true,
      },
      Exits: {
        fadeOut: true,
        fadeOutDown: true,
        fadeOutDownBig: true,
        fadeOutLeft: true,
        fadeOutLeftBig: true,
        fadeOutRight: true,
        fadeOutRightBig: true,
        fadeOutUp: true,
        fadeOutUpBig: true,
      },
    },
    Flip: {
      Entrances: {
        flipInX: true,
        flipInY: true,
      },
      Exits: {
        flipOutX: true,
        flipOutY: true,
      },
      flip: true,
    },
    Rotate: {
      Entrances: {
        rotateIn: true,
        rotateInDownLeft: true,
        rotateInDownRight: true,
        rotateInUpLeft: true,
        rotateInUpRight: true,
      },
      Exits: {
        rotateOut: true,
        rotateOutDownLeft: true,
        rotateOutDownRight: true,
        rotateOutUpLeft: true,
        rotateOutUpRight: true,
      },
    },
    Slide: {
      Entrances: {
        slideInDown: true,
        slideInLeft: true,
        slideInRight: true,
        slideInUp: true,
      },
      Exits: {
        slideOutDown: true,
        slideOutLeft: true,
        slideOutRight: true,
        slideOutUp: true,
      },
    },
    Specials: {
      lightSpeed: {
        lightSpeedIn: true,
        lightSpeedOut: true,
      },
      hinge: true,
      jackInTheBox: true,
      rollIn: true,
      rollOut: true,
    },
    Zoom: {
      Entrances: {
        zoomIn: true,
        zoomInDown: true,
        zoomInLeft: true,
        zoomInRight: true,
        zoomInUp: true,
      },
      Exits: {
        zoomOut: true,
        zoomOutDown: true,
        zoomOutLeft: true,
        zoomOutRight: true,
        zoomOutUp: true,
      },
    },
  },
}
