export default {
  bounce: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transformOrigin: 'center bottom' },
      { offset: 0.2, transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
      { offset: 0.4, transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
      { offset: 0.43, transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
      { offset: 0.53, transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
      { offset: 0.7, transform: 'translate3d(0, -15px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
      { offset: 0.8, transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
      { offset: 0.9, transform: 'translate3d(0, -4px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', easing: 'ease', transformOrigin: 'center bottom' }
    ],
    options: {
      duration: 1000
    }
  },

  flash: {
    keyframes: [
      { opacity: 1 }, //
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0 },
      { opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  headShake: {
    keyframes: [
      { offset: 0.0, transform: 'translateX(0)' },
      { offset: 0.065, transform: 'translateX(-6px) rotateY(-9deg)' },
      { offset: 0.185, transform: 'translateX(5px) rotateY(7deg)' },
      { offset: 0.315, transform: 'translateX(-3px) rotateY(-5deg)' },
      { offset: 0.435, transform: 'translateX(2px) rotateY(3deg)' },
      { offset: 0.5, transform: 'translateX(0)' },
      { offset: 1.0, transform: 'translateX(0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in-out'
    }
  },

  heartBeat: {
    keyframes: [
      { offset: 0.0, transform: 'scale(1)' },
      { offset: 0.14, transform: 'scale(1.3)' },
      { offset: 0.28, transform: 'scale(1)' },
      { offset: 0.42, transform: 'scale(1.3)' },
      { offset: 0.7, transform: 'scale(1)' },
      { offset: 1.0, transform: 'scale(1)' }
    ],
    options: {
      duration: 1300,
      easing: 'ease-in-out'
    }
  },

  jello: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)' },
      { offset: 0.111, transform: 'translate3d(0, 0, 0)' },
      { offset: 0.222, transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
      { offset: 0.333, transform: 'skewX(6.25deg) skewY(6.25deg)' },
      { offset: 0.444, transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
      { offset: 0.555, transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
      { offset: 0.666, transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
      { offset: 0.777, transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
      { offset: 0.888, transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  pulse: {
    keyframes: [
      { transform: 'scale3d(1, 1, 1)' }, //
      { transform: 'scale3d(1.05, 1.05, 1.05)' },
      { transform: 'scale3d(1, 1, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  rubberBand: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(1, 1, 1)' },
      { offset: 0.3, transform: 'scale3d(1.25, 0.75, 1)' },
      { offset: 0.4, transform: 'scale3d(0.75, 1.25, 1)' },
      { offset: 0.5, transform: 'scale3d(1.15, 0.85, 1)' },
      { offset: 0.65, transform: 'scale3d(0.95, 1.05, 1)' },
      { offset: 0.75, transform: 'scale3d(1.05, 0.95, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  shake: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)' },
      { offset: 0.1, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 0.2, transform: 'translate3d(10px, 0, 0)' },
      { offset: 0.3, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 0.4, transform: 'translate3d(10px, 0, 0)' },
      { offset: 0.5, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 0.6, transform: 'translate3d(10px, 0, 0)' },
      { offset: 0.7, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 0.8, transform: 'translate3d(10px, 0, 0)' },
      { offset: 0.9, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  swing: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, 0deg)', transformOrigin: 'top center' },
      { offset: 0.2, transform: 'rotate3d(0, 0, 1, 15deg)' },
      { offset: 0.4, transform: 'rotate3d(0, 0, 1, -10deg)' },
      { offset: 0.6, transform: 'rotate3d(0, 0, 1, 5deg)' },
      { offset: 0.8, transform: 'rotate3d(0, 0, 1, -5deg)' },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, 0deg)', transformOrigin: 'top center' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  tada: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(1, 1, 1)' },
      { offset: 0.1, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.3, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { offset: 0.4, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.5, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { offset: 0.6, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.7, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { offset: 0.8, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.9, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  wobble: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)' },
      { offset: 0.15, transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
      { offset: 0.3, transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
      { offset: 0.45, transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
      { offset: 0.6, transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
      { offset: 0.75, transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  bounceIn: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0 },
      { offset: 0.2, transform: 'scale3d(1.1, 1.1, 1.1)' },
      { offset: 0.4, transform: 'scale3d(0.9, 0.9, 0.9)' },
      { offset: 0.6, transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1 },
      { offset: 0.8, transform: 'scale3d(0.97, 0.97, 0.97)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1 }
    ],
    options: {
      duration: 750,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  },

  bounceInDown: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, -3000px, 0)', opacity: 0 },
      { offset: 0.6, transform: 'translate3d(0, 25px, 0)', opacity: 1 },
      { offset: 0.75, transform: 'translate3d(0, -10px, 0)' },
      { offset: 0.9, transform: 'translate3d(0, 5px, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  },

  bounceInLeft: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(-3000px, 0, 0)', opacity: 0 },
      { offset: 0.6, transform: 'translate3d(25px, 0, 0)', opacity: 1 },
      { offset: 0.75, transform: 'translate3d(-10px, 0, 0)' },
      { offset: 0.9, transform: 'translate3d(5px, 0, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  },

  bounceInRight: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(3000px, 0, 0)', opacity: 0 },
      { offset: 0.6, transform: 'translate3d(-25px, 0, 0)', opacity: 1 },
      { offset: 0.75, transform: 'translate3d(10px, 0, 0)' },
      { offset: 0.9, transform: 'translate3d(-5px, 0, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  },

  bounceInUp: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 3000px, 0)', opacity: 0 },
      { offset: 0.6, transform: 'translate3d(0, -20px, 0)', opacity: 1 },
      { offset: 0.75, transform: 'translate3d(0, 10px, 0)' },
      { offset: 0.9, transform: 'translate3d(0, -5px, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  },

  bounceOut: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9)' },
      { offset: 0.5, transform: 'scale3d(1.1, 1.1, 1.1)' },
      { offset: 0.55, transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1 },
      { offset: 1.0, transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0 }
    ],
    options: {
      duration: 750,
      easing: 'ease'
    }
  },

  bounceOutDown: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 0.2, transform: 'translate3d(0, 10px, 0)' },
      { offset: 0.4, transform: 'translate3d(0, -20px, 0)' },
      { offset: 0.45, transform: 'translate3d(0, -20px, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(0, 2000px, 0)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  bounceOutLeft: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 0.2, transform: 'translate3d(20px, 0, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(-2000px, 0, 0)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  bounceOutRight: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 0.2, transform: 'translate3d(-20px, 0, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(2000px, 0, 0)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  bounceOutUp: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 0.2, transform: 'translate3d(0, -10px, 0)' },
      { offset: 0.4, transform: 'translate3d(0, 20px, 0)' },
      { offset: 0.45, transform: 'translate3d(0, 20px, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(0, -2000px, 0)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeIn: {
    keyframes: [
      { opacity: 0 }, //
      { opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInDown: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInDownBig: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(0, -2000px, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInLeft: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInLeftBig: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(-2000px, 0, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInRight: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInRightBig: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(2000px, 0, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInUp: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeInUpBig: {
    keyframes: [
      { opacity: 0, transform: 'translate3d(0, 2000px, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOut: {
    keyframes: [
      { opacity: 1 }, //
      { opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutDown: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(0, 100%, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutDownBig: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(0, 2000px, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutLeft: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutLeftBig: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(-2000px, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutRight: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(100%, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutRightBig: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(2000px, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutUp: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(0, -100%, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  fadeOutUpBig: {
    keyframes: [
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      { opacity: 0, transform: 'translate3d(0, -2000px, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  flip: {
    keyframes: [
      { offset: 0.0, transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)', easing: 'ease-out' },
      { offset: 0.4, transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', easing: 'ease-out' },
      { offset: 0.5, transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', easing: 'ease-in' },
      { offset: 0.8, transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' },
      { offset: 1.0, transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', easing: 'ease-in' }
    ],
    options: {
      duration: 1000
    }
  },

  flipInX: {
    keyframes: [
      { offset: 0.0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, easing: 'ease-in' },
      { offset: 0.4, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', easing: 'ease-in' },
      { offset: 0.6, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1 },
      { offset: 0.8, transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
      { offset: 1.0, transform: 'perspective(400px)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  flipInY: {
    keyframes: [
      { offset: 0.0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, easing: 'ease-in' },
      { offset: 0.4, transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', easing: 'ease-in' },
      { offset: 0.6, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1 },
      { offset: 0.8, transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
      { offset: 1.0, transform: 'perspective(400px)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  flipOutX: {
    keyframes: [
      { offset: 0.0, transform: 'perspective(400px)', opacity: 1 },
      { offset: 0.3, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1 },
      { offset: 1.0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0 }
    ],
    options: {
      duration: 750,
      easing: 'ease'
    }
  },

  flipOutY: {
    keyframes: [
      { offset: 0.0, transform: 'perspective(400px)', opacity: 1 },
      { offset: 0.3, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1 },
      { offset: 1.0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0 }
    ],
    options: {
      duration: 750,
      easing: 'ease'
    }
  },

  lightSpeedIn: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: 0 },
      { offset: 0.6, transform: 'skewX(20deg)', opacity: 1 },
      { offset: 0.8, transform: 'skewX(-5deg)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease-out'
    }
  },

  lightSpeedOut: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateIn: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0 },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateInDownLeft: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, transformOrigin: 'left bottom' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1, transformOrigin: 'left bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateInDownRight: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, transformOrigin: 'right bottom' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1, transformOrigin: 'right bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateInUpLeft: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, transformOrigin: 'left bottom' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1, transformOrigin: 'left bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateInUpRight: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0, transformOrigin: 'right bottom' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1, transformOrigin: 'right bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateOut: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 0, 0)', opacity: 1 },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateOutDownLeft: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 0, 0)', opacity: 1, transformOrigin: 'left bottom' },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, transformOrigin: 'left bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateOutDownRight: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 0, 0)', opacity: 1, transformOrigin: 'right bottom' },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, transformOrigin: 'right bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateOutUpLeft: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 0, 0)', opacity: 1, transformOrigin: 'left bottom' },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, transformOrigin: 'left bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  rotateOutUpRight: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 0, 0)', opacity: 1, transformOrigin: 'right bottom' },
      { offset: 1.0, transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, transformOrigin: 'right bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideInDown: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, -100%, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideInLeft: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(-100%, 0, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideInRight: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(100%, 0, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideInUp: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 100%, 0)' },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideOutDown: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 1.0, transform: 'translate3d(0, 100%, 0)', visibility: 'hidden' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideOutLeft: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 1.0, transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideOutRight: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 1.0, transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  slideOutUp: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
      { offset: 1.0, transform: 'translate3d(0, -100%, 0)', visibility: 'hidden' }
    ],
    options: {
      duration: 1000,
      easing: 'ease-in'
    }
  },

  hinge: {
    keyframes: [
      { offset: 0.0, transform: 'rotate3d(0, 0, 1, 0deg)', opacity: 1, transformOrigin: 'top left', easing: 'ease-in-out' },
      { offset: 0.2, transform: 'rotate3d(0, 0, 1, 80deg)' },
      { offset: 0.4, transform: 'rotate3d(0, 0, 1, 60deg)' },
      { offset: 0.6, transform: 'rotate3d(0, 0, 1, 80deg)' },
      { offset: 0.8, transform: 'rotate3d(0, 0, 1, 60deg)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(0, 700px, 0)', opacity: 0, transformOrigin: 'top left', easing: 'ease-in-out' }
    ],
    options: {
      duration: 2000,
      easing: 'ease'
    }
  },

  jackInTheBox: {
    keyframes: [
      { offset: 0.0, transform: 'scale(0.1) rotate(30deg)', opacity: 0, transformOrigin: 'center bottom' },
      { offset: 0.5, transform: 'rotate(-10deg)' },
      { offset: 0.7, transform: 'rotate(3deg)' },
      { offset: 1.0, transform: 'scale(1)', opacity: 1, transformOrigin: 'center bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  rollIn: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 },
      { offset: 1.0, transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  rollOut: {
    keyframes: [
      { offset: 0.0, transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { offset: 1.0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomIn: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0 },
      { offset: 0.5, opacity: 1 },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomInDown: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)', opacity: 0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
      { offset: 0.6, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomInLeft: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)', opacity: 0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
      { offset: 0.6, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomInRight: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)', opacity: 0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
      { offset: 0.6, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomInUp: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)', opacity: 0, easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
      { offset: 0.6, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, transform: 'scale3d(1, 1, 1)', opacity: 1, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomOut: {
    keyframes: [
      { offset: 0.0, transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { offset: 0.5, transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0 },
      { offset: 1.0, transform: 'scale3d(0, 0, 0)', opacity: 0 }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomOutDown: {
    keyframes: [
      { offset: 0.0, opacity: 1, transform: 'scale3d(1, 1, 1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
      { offset: 0.4, opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateY(-60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateY(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomOutLeft: {
    keyframes: [
      { offset: 0.0, opacity: 1, transform: 'scale3d(1, 1, 1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 0.4, opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateX(10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateX(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomOutRight: {
    keyframes: [
      { offset: 0.0, opacity: 1, transform: 'scale3d(1, 1, 1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 0.4, opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateX(-10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateX(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
  },

  zoomOutUp: {
    keyframes: [
      { offset: 0.0, opacity: 1, transform: 'scale3d(1, 1, 1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
      { offset: 0.4, opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translateY(60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
      { offset: 1.0, opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translateY(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
    ],
    options: {
      duration: 1000,
      easing: 'ease'
    }
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
      heartBeat: true
    },

    Bounce: {
      Entrances: {
        bounceIn: true,
        bounceInDown: true,
        bounceInLeft: true,
        bounceInRight: true,
        bounceInUp: true
      },
      Exits: {
        bounceOut: true,
        bounceOutDown: true,
        bounceOutLeft: true,
        bounceOutRight: true,
        bounceOutUp: true
      }
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
        fadeInUpBig: true
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
        fadeOutUpBig: true
      }
    },

    Flip: {
      Entrances: {
        flipInX: true,
        flipInY: true
      },
      Exits: {
        flipOutX: true,
        flipOutY: true
      },
      flip: true
    },

    Rotate: {
      Entrances: {
        rotateIn: true,
        rotateInDownLeft: true,
        rotateInDownRight: true,
        rotateInUpLeft: true,
        rotateInUpRight: true
      },
      Exits: {
        rotateOut: true,
        rotateOutDownLeft: true,
        rotateOutDownRight: true,
        rotateOutUpLeft: true,
        rotateOutUpRight: true
      }
    },
    Slide: {
      Entrances: {
        slideInDown: true,
        slideInLeft: true,
        slideInRight: true,
        slideInUp: true
      },
      Exits: {
        slideOutDown: true,
        slideOutLeft: true,
        slideOutRight: true,
        slideOutUp: true
      }
    },

    Specials: {
      lightSpeed: {
        lightSpeedIn: true,
        lightSpeedOut: true
      },
      hinge: true,
      jackInTheBox: true,
      rollIn: true,
      rollOut: true
    },

    Zoom: {
      Entrances: {
        zoomIn: true,
        zoomInDown: true,
        zoomInLeft: true,
        zoomInRight: true,
        zoomInUp: true
      },
      Exits: {
        zoomOut: true,
        zoomOutDown: true,
        zoomOutLeft: true,
        zoomOutRight: true,
        zoomOutUp: true
      }
    }
  }
}
