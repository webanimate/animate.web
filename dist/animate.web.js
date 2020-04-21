//animate.web v0.0.3 https://github.com/webanimate/animate.web#readme
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).animateweb=t()}(this,(function(){"use strict";return{bounce:{keyframes:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)",transformOrigin:"center bottom"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.9,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -4px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)",transformOrigin:"center bottom"}],options:{duration:1e3}},flash:{keyframes:[{easing:"ease",opacity:1},{easing:"ease",opacity:0},{easing:"ease",opacity:1},{easing:"ease",opacity:0},{opacity:1}],options:{duration:1e3}},headShake:{keyframes:[{offset:0,easing:"ease-in-out",transform:"translateX(0)"},{offset:.065,easing:"ease-in-out",transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,easing:"ease-in-out",transform:"translateX(5px) rotateY(7deg)"},{offset:.315,easing:"ease-in-out",transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,easing:"ease-in-out",transform:"translateX(2px) rotateY(3deg)"},{offset:.5,easing:"ease-in-out",transform:"translateX(0)"},{offset:1,transform:"translateX(0)"}],options:{duration:1e3}},heartBeat:{keyframes:[{offset:0,easing:"ease-in-out",transform:"scale(1)"},{offset:.14,easing:"ease-in-out",transform:"scale(1.3)"},{offset:.28,easing:"ease-in-out",transform:"scale(1)"},{offset:.42,easing:"ease-in-out",transform:"scale(1.3)"},{offset:.7,easing:"ease-in-out",transform:"scale(1)"},{offset:1,transform:"scale(1)"}],options:{duration:1300}},jello:{keyframes:[{offset:0,easing:"ease",transform:"translate3d(0, 0, 0)"},{offset:.111,easing:"ease",transform:"translate3d(0, 0, 0)"},{offset:.222,easing:"ease",transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.333,easing:"ease",transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,easing:"ease",transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,easing:"ease",transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.666,easing:"ease",transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,easing:"ease",transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,easing:"ease",transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3}},pulse:{keyframes:[{easing:"ease",transform:"scale3d(1, 1, 1)"},{easing:"ease",transform:"scale3d(1.05, 1.05, 1.05)"},{transform:"scale3d(1, 1, 1)"}],options:{duration:1e3}},rubberBand:{keyframes:[{offset:0,easing:"ease",transform:"scale3d(1, 1, 1)"},{offset:.3,easing:"ease",transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,easing:"ease",transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,easing:"ease",transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,easing:"ease",transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,easing:"ease",transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],options:{duration:1e3}},shake:{keyframes:[{easing:"ease",transform:"translate3d(0, 0, 0)"},{easing:"ease",transform:"translate3d(-10px, 0, 0)"},{easing:"ease",transform:"translate3d(10px, 0, 0)"},{easing:"ease",transform:"translate3d(-10px, 0, 0)"},{easing:"ease",transform:"translate3d(10px, 0, 0)"},{easing:"ease",transform:"translate3d(-10px, 0, 0)"},{easing:"ease",transform:"translate3d(10px, 0, 0)"},{easing:"ease",transform:"translate3d(-10px, 0, 0)"},{easing:"ease",transform:"translate3d(10px, 0, 0)"},{easing:"ease",transform:"translate3d(-10px, 0, 0)"},{transform:"translate3d(0, 0, 0)"}],options:{duration:1e3}},swing:{keyframes:[{easing:"ease",transform:"rotate3d(0, 0, 1, 0deg)",transformOrigin:"top center"},{easing:"ease",transform:"rotate3d(0, 0, 1, 15deg)"},{easing:"ease",transform:"rotate3d(0, 0, 1, -10deg)"},{easing:"ease",transform:"rotate3d(0, 0, 1, 5deg)"},{easing:"ease",transform:"rotate3d(0, 0, 1, -5deg)"},{transform:"rotate3d(0, 0, 1, 0deg)",transformOrigin:"top center"}],options:{duration:1e3}},tada:{keyframes:[{easing:"ease",transform:"scale3d(1, 1, 1)"},{easing:"ease",transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{easing:"ease",transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{easing:"ease",transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{transform:"scale3d(1, 1, 1)"}],options:{duration:1e3}},wobble:{keyframes:[{offset:0,easing:"ease",transform:"translate3d(0, 0, 0)"},{offset:.15,easing:"ease",transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,easing:"ease",transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,easing:"ease",transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,easing:"ease",transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,easing:"ease",transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],options:{duration:1e3}},bounceIn:{keyframes:[{easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",visibility:"visible"},{easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"scale3d(1.1, 1.1, 1.1)"},{easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"scale3d(0.9, 0.9, 0.9)"},{easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:1,transform:"scale3d(1.03, 1.03, 1.03)"},{easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"scale3d(0.97, 0.97, 0.97)"},{opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:750}},bounceInDown:{keyframes:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:0,transform:"translate3d(0, -3000px, 0)",visibility:"visible"},{offset:.01,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:1,transform:"translate3d(0, 25px, 0)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, -10px, 0)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 5px, 0)"},{offset:1,opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},bounceInLeft:{keyframes:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:0,transform:"translate3d(-3000px, 0, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:1,transform:"translate3d(25px, 0, 0)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(-10px, 0, 0)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(5px, 0, 0)"},{offset:1,opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},bounceInRight:{keyframes:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:0,transform:"translate3d(3000px, 0, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:1,transform:"translate3d(-25px, 0, 0)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(10px, 0, 0)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(-5px, 0, 0)"},{offset:1,opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},bounceInUp:{keyframes:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:0,transform:"translate3d(0, 3000px, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",opacity:1,transform:"translate3d(0, -20px, 0)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 10px, 0)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, -5px, 0)"},{offset:1,opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},bounceOut:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"},{offset:.2,easing:"ease",transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,easing:"ease",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,easing:"ease",opacity:1,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",visibility:"hidden"}],options:{duration:750,fill:"forwards"}},bounceOutDown:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:.2,easing:"ease",transform:"translate3d(0, 10px, 0)"},{offset:.4,easing:"ease",transform:"translate3d(0, -20px, 0)"},{offset:.45,easing:"ease",opacity:1,transform:"translate3d(0, -20px, 0)"},{offset:1,opacity:0,transform:"translate3d(0, 2000px, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},bounceOutLeft:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:.2,easing:"ease",opacity:1,transform:"translate3d(20px, 0, 0)"},{offset:1,opacity:0,transform:"translate3d(-2000px, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},bounceOutRight:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:.2,easing:"ease",opacity:1,transform:"translate3d(-20px, 0, 0)"},{offset:1,opacity:0,transform:"translate3d(2000px, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},bounceOutUp:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{offset:.2,easing:"ease",transform:"translate3d(0, -10px, 0)"},{offset:.4,easing:"ease",transform:"translate3d(0, 20px, 0)"},{offset:.45,easing:"ease",opacity:1,transform:"translate3d(0, 20px, 0)"},{offset:1,opacity:0,transform:"translate3d(0, -2000px, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeIn:{keyframes:[{easing:"ease",opacity:0,visibility:"visible"},{opacity:1,visibility:"visible"}],options:{duration:1e3}},fadeInDown:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInDownBig:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(0, -2000px, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInLeft:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInLeftBig:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(-2000px, 0, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInRight:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInRightBig:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(2000px, 0, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInUp:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeInUpBig:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(0, 2000px, 0)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},fadeOut:{keyframes:[{easing:"ease",opacity:1,visibility:"visible"},{opacity:0,visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutDown:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(0, 100%, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutDownBig:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(0, 2000px, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutLeft:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutLeftBig:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(-2000px, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutRight:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutRightBig:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(2000px, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutUp:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(0, -100%, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},fadeOutUpBig:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(0, -2000px, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},flip:{keyframes:[{offset:0,easing:"ease-out",transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)"},{offset:.4,easing:"ease-out",transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)"},{offset:.5,easing:"ease-in",transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)"},{offset:.8,easing:"ease-in",transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)"}],options:{duration:1e3}},flipInX:{keyframes:[{offset:0,easing:"ease-in",opacity:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",visibility:"visible"},{offset:.4,easing:"ease-in",transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)"},{offset:.6,easing:"ease",opacity:1,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)"},{offset:.8,easing:"ease",transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,opacity:1,transform:"perspective(400px)",visibility:"visible"}],options:{duration:1e3}},flipInY:{keyframes:[{offset:0,easing:"ease-in",opacity:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",visibility:"visible"},{offset:.4,easing:"ease-in",transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)"},{offset:.6,easing:"ease",opacity:1,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)"},{offset:.8,easing:"ease",transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,opacity:1,transform:"perspective(400px)",visibility:"visible"}],options:{duration:1e3}},flipOutX:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"perspective(400px)",visibility:"visible"},{offset:.3,easing:"ease",opacity:1,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)"},{offset:1,opacity:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",visibility:"hidden"}],options:{duration:750,fill:"forwards"}},flipOutY:{keyframes:[{offset:0,easing:"ease",opacity:1,transform:"perspective(400px)",visibility:"visible"},{offset:.3,easing:"ease",opacity:1,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)"},{offset:1,opacity:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",visibility:"hidden"}],options:{duration:750,fill:"forwards"}},lightSpeedIn:{keyframes:[{offset:0,easing:"ease-out",opacity:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",visibility:"visible"},{offset:.6,easing:"ease-out",opacity:1,transform:"skewX(20deg)"},{offset:.8,easing:"ease-out",transform:"skewX(-5deg)"},{offset:1,opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},lightSpeedOut:{keyframes:[{easing:"ease-in",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(100%, 0, 0) skewX(30deg)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},rotateIn:{keyframes:[{easing:"ease-in",opacity:0,transform:"rotate3d(0, 0, 1, -200deg)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},rotateInDownLeft:{keyframes:[{easing:"ease-in",opacity:0,transform:"rotate3d(0, 0, 1, -45deg)",transformOrigin:"left bottom",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"left bottom",visibility:"visible"}],options:{duration:1e3}},rotateInDownRight:{keyframes:[{easing:"ease-in",opacity:0,transform:"rotate3d(0, 0, 1, 45deg)",transformOrigin:"right bottom",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"right bottom",visibility:"visible"}],options:{duration:1e3}},rotateInUpLeft:{keyframes:[{easing:"ease-in",opacity:0,transform:"rotate3d(0, 0, 1, 45deg)",transformOrigin:"left bottom",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"left bottom",visibility:"visible"}],options:{duration:1e3}},rotateInUpRight:{keyframes:[{easing:"ease-in",opacity:0,transform:"rotate3d(0, 0, 1, -90deg)",transformOrigin:"right bottom",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"right bottom",visibility:"visible"}],options:{duration:1e3}},rotateOut:{keyframes:[{easing:"ease-in",opacity:1,transform:"rotate3d(0, 0, 0, 0)",visibility:"visible"},{opacity:0,transform:"rotate3d(0, 0, 1, 200deg)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},rotateOutDownLeft:{keyframes:[{easing:"ease-in",opacity:1,transform:"rotate3d(0, 0, 0, 0)",transformOrigin:"left bottom",visibility:"visible"},{opacity:0,transform:"rotate3d(0, 0, 1, 45deg)",transformOrigin:"left bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},rotateOutDownRight:{keyframes:[{easing:"ease-in",opacity:1,transform:"rotate3d(0, 0, 0, 0)",transformOrigin:"right bottom",visibility:"visible"},{opacity:0,transform:"rotate3d(0, 0, 1, -45deg)",transformOrigin:"right bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},rotateOutUpLeft:{keyframes:[{easing:"ease-in",opacity:1,transform:"rotate3d(0, 0, 0, 0)",transformOrigin:"left bottom",visibility:"visible"},{opacity:0,transform:"rotate3d(0, 0, 1, -45deg)",transformOrigin:"left bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},rotateOutUpRight:{keyframes:[{easing:"ease-in",opacity:1,transform:"rotate3d(0, 0, 0, 0)",transformOrigin:"right bottom",visibility:"visible"},{opacity:0,transform:"rotate3d(0, 0, 1, 90deg)",transformOrigin:"right bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},slideInDown:{keyframes:[{easing:"ease-in",transform:"translate3d(0, -100%, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},slideInLeft:{keyframes:[{easing:"ease-in",transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},slideInRight:{keyframes:[{easing:"ease-in",transform:"translate3d(100%, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},slideInUp:{keyframes:[{easing:"ease-in",transform:"translate3d(0, 100%, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},slideOutDown:{keyframes:[{easing:"ease-in",transform:"translate3d(0, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 100%, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},slideOutLeft:{keyframes:[{easing:"ease-in",transform:"translate3d(0, 0, 0)",visibility:"visible"},{transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},slideOutRight:{keyframes:[{easing:"ease-in",transform:"translate3d(0, 0, 0)",visibility:"visible"},{transform:"translate3d(100%, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},slideOutUp:{keyframes:[{easing:"ease-in",transform:"translate3d(0, 0, 0)",visibility:"visible"},{transform:"translate3d(0, -100%, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},hinge:{keyframes:[{easing:"ease-in-out",opacity:1,transform:"rotate3d(0, 0, 1, 0deg)",transformOrigin:"top left",visibility:"visible"},{easing:"ease-in-out",transform:"rotate3d(0, 0, 1, 80deg)"},{easing:"ease-in-out",transform:"rotate3d(0, 0, 1, 60deg)"},{easing:"ease-in-out",transform:"rotate3d(0, 0, 1, 80deg)"},{easing:"ease-in-out",opacity:1,transform:"rotate3d(0, 0, 1, 60deg)"},{opacity:0,transform:"translate3d(0, 700px, 0)",transformOrigin:"top left",visibility:"hidden"}],options:{duration:2e3}},jackInTheBox:{keyframes:[{offset:0,easing:"ease",opacity:0,transform:"scale(0.1) rotate(30deg)",transformOrigin:"center bottom",visibility:"visible"},{offset:.5,easing:"ease",transform:"rotate(-10deg)"},{offset:.7,easing:"ease",transform:"rotate(3deg)"},{offset:1,opacity:1,transform:"scale(1)",transformOrigin:"center bottom",visibility:"visible"}],options:{duration:1e3}},rollIn:{keyframes:[{easing:"ease",opacity:0,transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",visibility:"visible"},{opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"}],options:{duration:1e3}},rollOut:{keyframes:[{easing:"ease",opacity:1,transform:"translate3d(0, 0, 0)",visibility:"visible"},{opacity:0,transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},zoomIn:{keyframes:[{easing:"ease",opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",visibility:"visible"},{opacity:1},{opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:1e3}},zoomInDown:{keyframes:[{offset:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)"},{offset:1,opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:1e3}},zoomInLeft:{keyframes:[{offset:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)"},{offset:1,opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:1e3}},zoomInRight:{keyframes:[{offset:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)"},{offset:1,opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:1e3}},zoomInUp:{keyframes:[{offset:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",visibility:"visible"},{offset:.6,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)"},{offset:1,opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"}],options:{duration:1e3}},zoomOut:{keyframes:[{easing:"ease",opacity:1,transform:"scale3d(1, 1, 1)",visibility:"visible"},{easing:"ease",opacity:0,transform:"scale3d(0.3, 0.3, 0.3)"},{opacity:0,transform:"scale3d(0, 0, 0)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},zoomOutDown:{keyframes:[{offset:0,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(1, 1, 1) translateY(0px)",transformOrigin:"center",visibility:"visible"},{offset:.4,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateY(-60px)",transformOrigin:"center"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateY(1000px)",transformOrigin:"center bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},zoomOutLeft:{keyframes:[{offset:0,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(1, 1, 1) translateX(0px)",visibility:"visible"},{offset:.4,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateX(10px)"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateX(-1000px)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},zoomOutRight:{keyframes:[{offset:0,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(1, 1, 1) translateX(0px)",visibility:"visible"},{offset:.4,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateX(-10px)"},{offset:1,opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateX(1000px)",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},zoomOutUp:{keyframes:[{offset:0,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",composite:"replace",opacity:1,transform:"scale3d(1, 1, 1) translateY(0px)",transformOrigin:"center",visibility:"visible"},{offset:.4,easing:"cubic-bezier(0.175, 0.885, 0.32, 1)",composite:"replace",opacity:1,transform:"scale3d(0.475, 0.475, 0.475) translateY(60px)",transformOrigin:"center"},{offset:1,composite:"replace",opacity:0,transform:"scale3d(0.1, 0.1, 0.1) translateY(-1000px)",transformOrigin:"center bottom",visibility:"hidden"}],options:{duration:1e3,fill:"forwards"}},categories:{"Attention Seekers":{bounce:!0,flash:!0,pulse:!0,rubberBand:!0,shake:!0,headShake:!0,swing:!0,tada:!0,wobble:!0,jello:!0,heartBeat:!0},Bounce:{Entrances:{bounceIn:!0,bounceInDown:!0,bounceInLeft:!0,bounceInRight:!0,bounceInUp:!0},Exits:{bounceOut:!0,bounceOutDown:!0,bounceOutLeft:!0,bounceOutRight:!0,bounceOutUp:!0}},Fade:{Entrances:{fadeIn:!0,fadeInDown:!0,fadeInDownBig:!0,fadeInLeft:!0,fadeInLeftBig:!0,fadeInRight:!0,fadeInRightBig:!0,fadeInUp:!0,fadeInUpBig:!0},Exits:{fadeOut:!0,fadeOutDown:!0,fadeOutDownBig:!0,fadeOutLeft:!0,fadeOutLeftBig:!0,fadeOutRight:!0,fadeOutRightBig:!0,fadeOutUp:!0,fadeOutUpBig:!0}},Flip:{Entrances:{flipInX:!0,flipInY:!0},Exits:{flipOutX:!0,flipOutY:!0},flip:!0},Rotate:{Entrances:{rotateIn:!0,rotateInDownLeft:!0,rotateInDownRight:!0,rotateInUpLeft:!0,rotateInUpRight:!0},Exits:{rotateOut:!0,rotateOutDownLeft:!0,rotateOutDownRight:!0,rotateOutUpLeft:!0,rotateOutUpRight:!0}},Slide:{Entrances:{slideInDown:!0,slideInLeft:!0,slideInRight:!0,slideInUp:!0},Exits:{slideOutDown:!0,slideOutLeft:!0,slideOutRight:!0,slideOutUp:!0}},Specials:{lightSpeed:{lightSpeedIn:!0,lightSpeedOut:!0},hinge:!0,jackInTheBox:!0,rollIn:!0,rollOut:!0},Zoom:{Entrances:{zoomIn:!0,zoomInDown:!0,zoomInLeft:!0,zoomInRight:!0,zoomInUp:!0},Exits:{zoomOut:!0,zoomOutDown:!0,zoomOutLeft:!0,zoomOutRight:!0,zoomOutUp:!0}}}}}));
//# sourceMappingURL=animate.web.js.map
