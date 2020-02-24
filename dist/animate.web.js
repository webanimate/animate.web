//animate.web v0.0.0-alpha.0 https://github.com/webanimate/animate.web#readme
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).animateweb=e()}(this,(function(){"use strict";return{bounce:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transformOrigin:"center bottom"},{offset:.2,transform:"translate3d(0, 0, 0)",easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"translate3d(0, -30px, 0)",easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},{offset:.43,transform:"translate3d(0, -30px, 0)",easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},{offset:.53,transform:"translate3d(0, 0, 0)",easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.7,transform:"translate3d(0, -15px, 0)",easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},{offset:.8,transform:"translate3d(0, 0, 0)",easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -4px, 0)",easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},{offset:1,transform:"translate3d(0, 0, 0)",easing:"ease",transformOrigin:"center bottom"}],options:{duration:1e3}},flash:{keyframes:[{opacity:1},{opacity:0},{opacity:1},{opacity:0},{opacity:1}],options:{duration:1e3,easing:"ease"}},headShake:{keyframes:[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"},{offset:1,transform:"translateX(0)"}],options:{duration:1e3,easing:"ease-in-out"}},heartBeat:{keyframes:[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"},{offset:1,transform:"scale(1)"}],options:{duration:1300,easing:"ease-in-out"}},jello:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.333,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.666,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},pulse:{keyframes:[{transform:"scale3d(1, 1, 1)"},{transform:"scale3d(1.05, 1.05, 1.05)"},{transform:"scale3d(1, 1, 1)"}],options:{duration:1e3,easing:"ease"}},rubberBand:{keyframes:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],options:{duration:1e3,easing:"ease"}},shake:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},swing:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, 0deg)",transformOrigin:"top center"},{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)",transformOrigin:"top center"}],options:{duration:1e3,easing:"ease"}},tada:{keyframes:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],options:{duration:1e3,easing:"ease"}},wobble:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},bounceIn:{keyframes:[{offset:0,transform:"scale3d(0.3, 0.3, 0.3)",opacity:0},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.6,transform:"scale3d(1.03, 1.03, 1.03)",opacity:1},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1}],options:{duration:750,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}},bounceInDown:{keyframes:[{offset:0,transform:"translate3d(0, -3000px, 0)",opacity:0},{offset:.6,transform:"translate3d(0, 25px, 0)",opacity:1},{offset:.75,transform:"translate3d(0, -10px, 0)"},{offset:.9,transform:"translate3d(0, 5px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}},bounceInLeft:{keyframes:[{offset:0,transform:"translate3d(-3000px, 0, 0)",opacity:0},{offset:.6,transform:"translate3d(25px, 0, 0)",opacity:1},{offset:.75,transform:"translate3d(-10px, 0, 0)"},{offset:.9,transform:"translate3d(5px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}},bounceInRight:{keyframes:[{offset:0,transform:"translate3d(3000px, 0, 0)",opacity:0},{offset:.6,transform:"translate3d(-25px, 0, 0)",opacity:1},{offset:.75,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-5px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}},bounceInUp:{keyframes:[{offset:0,transform:"translate3d(0, 3000px, 0)",opacity:0},{offset:.6,transform:"translate3d(0, -20px, 0)",opacity:1},{offset:.75,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -5px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}},bounceOut:{keyframes:[{offset:0,transform:"scale3d(1, 1, 1)",opacity:1},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,transform:"scale3d(1.1, 1.1, 1.1)",opacity:1},{offset:1,transform:"scale3d(0.3, 0.3, 0.3)",opacity:0}],options:{duration:750,easing:"ease"}},bounceOutDown:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.4,transform:"translate3d(0, -20px, 0)"},{offset:.45,transform:"translate3d(0, -20px, 0)",opacity:1},{offset:1,transform:"translate3d(0, 2000px, 0)",opacity:0}],options:{duration:1e3,easing:"ease"}},bounceOutLeft:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:.2,transform:"translate3d(20px, 0, 0)",opacity:1},{offset:1,transform:"translate3d(-2000px, 0, 0)",opacity:0}],options:{duration:1e3,easing:"ease"}},bounceOutRight:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:.2,transform:"translate3d(-20px, 0, 0)",opacity:1},{offset:1,transform:"translate3d(2000px, 0, 0)",opacity:0}],options:{duration:1e3,easing:"ease"}},bounceOutUp:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:.2,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 20px, 0)"},{offset:.45,transform:"translate3d(0, 20px, 0)",opacity:1},{offset:1,transform:"translate3d(0, -2000px, 0)",opacity:0}],options:{duration:1e3,easing:"ease"}},fadeIn:{keyframes:[{opacity:0},{opacity:1}],options:{duration:1e3,easing:"ease"}},fadeInDown:{keyframes:[{opacity:0,transform:"translate3d(0, -100%, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInDownBig:{keyframes:[{opacity:0,transform:"translate3d(0, -2000px, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInLeft:{keyframes:[{opacity:0,transform:"translate3d(-100%, 0, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInLeftBig:{keyframes:[{opacity:0,transform:"translate3d(-2000px, 0, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInRight:{keyframes:[{opacity:0,transform:"translate3d(100%, 0, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInRightBig:{keyframes:[{opacity:0,transform:"translate3d(2000px, 0, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInUp:{keyframes:[{opacity:0,transform:"translate3d(0, 100%, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeInUpBig:{keyframes:[{opacity:0,transform:"translate3d(0, 2000px, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOut:{keyframes:[{opacity:1},{opacity:0}],options:{duration:1e3,easing:"ease"}},fadeOutDown:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(0, 100%, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutDownBig:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(0, 2000px, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutLeft:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(-100%, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutLeftBig:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(-2000px, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutRight:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(100%, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutRightBig:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(2000px, 0, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutUp:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(0, -100%, 0)"}],options:{duration:1e3,easing:"ease"}},fadeOutUpBig:{keyframes:[{opacity:1,transform:"translate3d(0, 0, 0)"},{opacity:0,transform:"translate3d(0, -2000px, 0)"}],options:{duration:1e3,easing:"ease"}},flip:{keyframes:[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],options:{duration:1e3}},flipInX:{keyframes:[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:0,easing:"ease-in"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:1},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)",opacity:1}],options:{duration:1e3,easing:"ease"}},flipInY:{keyframes:[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:0,easing:"ease-in"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:1},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)",opacity:1}],options:{duration:1e3,easing:"ease"}},flipOutX:{keyframes:[{offset:0,transform:"perspective(400px)",opacity:1},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:1},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:0}],options:{duration:750,easing:"ease"}},flipOutY:{keyframes:[{offset:0,transform:"perspective(400px)",opacity:1},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:1},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:0}],options:{duration:750,easing:"ease"}},lightSpeedIn:{keyframes:[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:0},{offset:.6,transform:"skewX(20deg)",opacity:1},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"ease-out"}},lightSpeedOut:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:0}],options:{duration:1e3,easing:"ease-in"}},rotateIn:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:0},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"ease-in"}},rotateInDownLeft:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,transformOrigin:"left bottom"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1,transformOrigin:"left bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateInDownRight:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,transformOrigin:"right bottom"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1,transformOrigin:"right bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateInUpLeft:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,transformOrigin:"left bottom"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1,transformOrigin:"left bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateInUpRight:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:0,transformOrigin:"right bottom"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1,transformOrigin:"right bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateOut:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 0, 0)",opacity:1},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:0}],options:{duration:1e3,easing:"ease-in"}},rotateOutDownLeft:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 0, 0)",opacity:1,transformOrigin:"left bottom"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,transformOrigin:"left bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateOutDownRight:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 0, 0)",opacity:1,transformOrigin:"right bottom"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,transformOrigin:"right bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateOutUpLeft:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 0, 0)",opacity:1,transformOrigin:"left bottom"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,transformOrigin:"left bottom"}],options:{duration:1e3,easing:"ease-in"}},rotateOutUpRight:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 0, 0)",opacity:1,transformOrigin:"right bottom"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:0,transformOrigin:"right bottom"}],options:{duration:1e3,easing:"ease-in"}},slideInDown:{keyframes:[{offset:0,transform:"translate3d(0, -100%, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease-in"}},slideInLeft:{keyframes:[{offset:0,transform:"translate3d(-100%, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease-in"}},slideInRight:{keyframes:[{offset:0,transform:"translate3d(100%, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease-in"}},slideInUp:{keyframes:[{offset:0,transform:"translate3d(0, 100%, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3,easing:"ease-in"}},slideOutDown:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 100%, 0)",visibility:"hidden"}],options:{duration:1e3,easing:"ease-in"}},slideOutLeft:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,easing:"ease-in"}},slideOutRight:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,easing:"ease-in"}},slideOutUp:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, -100%, 0)",visibility:"hidden"}],options:{duration:1e3,easing:"ease-in"}},hinge:{keyframes:[{offset:0,transform:"rotate3d(0, 0, 1, 0deg)",opacity:1,transformOrigin:"top left",easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",opacity:1},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:0,transformOrigin:"top left",easing:"ease-in-out"}],options:{duration:2e3,easing:"ease"}},jackInTheBox:{keyframes:[{offset:0,transform:"scale(0.1) rotate(30deg)",opacity:0,transformOrigin:"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,transform:"scale(1)",opacity:1,transformOrigin:"center bottom"}],options:{duration:1e3,easing:"ease"}},rollIn:{keyframes:[{offset:0,transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",opacity:0},{offset:1,transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:1e3,easing:"ease"}},rollOut:{keyframes:[{offset:0,transform:"translate3d(0, 0, 0)",opacity:1},{offset:1,transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",opacity:0}],options:{duration:1e3,easing:"ease"}},zoomIn:{keyframes:[{offset:0,transform:"scale3d(0.3, 0.3, 0.3)",opacity:0},{offset:.5,opacity:1},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1}],options:{duration:1e3,easing:"ease"}},zoomInDown:{keyframes:[{offset:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",opacity:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],options:{duration:1e3,easing:"ease"}},zoomInLeft:{keyframes:[{offset:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",opacity:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],options:{duration:1e3,easing:"ease"}},zoomInRight:{keyframes:[{offset:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",opacity:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],options:{duration:1e3,easing:"ease"}},zoomInUp:{keyframes:[{offset:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",opacity:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,transform:"scale3d(1, 1, 1)",opacity:1,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],options:{duration:1e3,easing:"ease"}},zoomOut:{keyframes:[{offset:0,transform:"scale3d(1, 1, 1)",opacity:1},{offset:.5,transform:"scale3d(0.3, 0.3, 0.3)",opacity:0},{offset:1,transform:"scale3d(0, 0, 0)",opacity:0}],options:{duration:1e3,easing:"ease"}},zoomOutDown:{keyframes:[{offset:0,opacity:1,transform:"scale3d(1, 1, 1) translateY(0px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",transformOrigin:"center"},{offset:.4,opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateY(-60px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",transformOrigin:"center"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateY(1000px)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",transformOrigin:"center bottom"}],options:{duration:1e3,easing:"ease"}},zoomOutLeft:{keyframes:[{offset:0,opacity:1,transform:"scale3d(1, 1, 1) translateX(0px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:.4,opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateX(10px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateX(-1000px)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"}],options:{duration:1e3,easing:"ease"}},zoomOutRight:{keyframes:[{offset:0,opacity:1,transform:"scale3d(1, 1, 1) translateX(0px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:.4,opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateX(-10px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"},{offset:1,opacity:0,transform:"scale3d(0.1) translateX(1000px)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"}],options:{duration:1e3,easing:"ease"}},zoomOutUp:{keyframes:[{offset:0,opacity:1,transform:"scale3d(1, 1, 1) translateY(0px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",transformOrigin:"center"},{offset:.4,opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateY(60px)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",transformOrigin:"center"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateY(-1000px)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",transformOrigin:"center bottom"}],options:{duration:1e3,easing:"ease"}},categories:{"Attention Seekers":{bounce:!0,flash:!0,pulse:!0,rubberBand:!0,shake:!0,headShake:!0,swing:!0,tada:!0,wobble:!0,jello:!0,heartBeat:!0},Bounce:{Entrances:{bounceIn:!0,bounceInDown:!0,bounceInLeft:!0,bounceInRight:!0,bounceInUp:!0},Exits:{bounceOut:!0,bounceOutDown:!0,bounceOutLeft:!0,bounceOutRight:!0,bounceOutUp:!0}},Fade:{Entrances:{fadeIn:!0,fadeInDown:!0,fadeInDownBig:!0,fadeInLeft:!0,fadeInLeftBig:!0,fadeInRight:!0,fadeInRightBig:!0,fadeInUp:!0,fadeInUpBig:!0},Exits:{fadeOut:!0,fadeOutDown:!0,fadeOutDownBig:!0,fadeOutLeft:!0,fadeOutLeftBig:!0,fadeOutRight:!0,fadeOutRightBig:!0,fadeOutUp:!0,fadeOutUpBig:!0}},Flip:{Entrances:{flipInX:!0,flipInY:!0},Exits:{flipOutX:!0,flipOutY:!0},flip:!0},Rotate:{Entrances:{rotateIn:!0,rotateInDownLeft:!0,rotateInDownRight:!0,rotateInUpLeft:!0,rotateInUpRight:!0},Exits:{rotateOut:!0,rotateOutDownLeft:!0,rotateOutDownRight:!0,rotateOutUpLeft:!0,rotateOutUpRight:!0}},Slide:{Entrances:{slideInDown:!0,slideInLeft:!0,slideInRight:!0,slideInUp:!0},Exits:{slideOutDown:!0,slideOutLeft:!0,slideOutRight:!0,slideOutUp:!0}},Specials:{lightSpeed:{lightSpeedIn:!0,lightSpeedOut:!0},hinge:!0,jackInTheBox:!0,rollIn:!0,rollOut:!0},Zoom:{Entrances:{zoomIn:!0,zoomInDown:!0,zoomInLeft:!0,zoomInRight:!0,zoomInUp:!0},Exits:{zoomOut:!0,zoomOutDown:!0,zoomOutLeft:!0,zoomOutRight:!0,zoomOutUp:!0}}}}}));
//# sourceMappingURL=animate.web.js.map
