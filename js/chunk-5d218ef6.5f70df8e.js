(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d218ef6"],{6537:function(t,s,o){},8248:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"app-init detail-page"},[o("div",{staticClass:"app-init scroll-box footer-hack"},[o("div",{staticClass:"banner"},[o("swiper",{attrs:{list:t.info.banner}}),o("span",{staticClass:"back iconfont icon-backer",on:{click:function(s){return t.$router.back()}}})],1),o("div",{staticClass:"content"},[o("div",{staticClass:"hot"},[o("img",{attrs:{src:t.info.hot,alt:""},on:{click:function(s){return t.$router.openPage(t.info.hotLink)}}})]),o("div",{staticClass:"title-box"},[o("h3",[t._v(t._s(t.info.title))]),o("p",{staticStyle:{color:"#ff4a00"}},[t._v(t._s(t.info.bigContent))]),o("p",{staticStyle:{color:"#757575"}},[t._v(" "+t._s(t.info.smallContent)+" ")]),o("div",{staticClass:"press"},[t.info.money?o("span",{staticClass:"money"},[t._v("￥"+t._s(t.info.money))]):t._e(),t.info.noMoney?o("span",{staticClass:"no-money"},[t._v("￥"+t._s(t.info.noMoney))]):t._e(),t._l(t.info.tips,(function(s,e){return o("span",{key:e,staticClass:"tips"},[t._v(t._s(s))])}))],2)]),o("div",{staticClass:"touch-item-box"},[o("div",{staticClass:"touch-item"},[o("span",{staticClass:"key"},[t._v("已选")]),t._v("\n          "+t._s(t.info.chouse)+"\n        ")]),o("div",{staticClass:"touch-item"},[o("span",{staticClass:"key"},[t._v("送至")]),t._l(t.info.address,(function(s,e){return o("span",{key:e},[t._v(t._s(s))])}))],2)]),t._m(0),o("div",{staticClass:"p-box"},t._l(t.info.pBox,(function(t,s){return o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"target"}],key:s,attrs:{alt:""}})})),0)])]),o("div",{staticClass:"detail-footer"},[o("div",{staticClass:"left-box fl"},[o("div",{staticClass:"item",on:{click:function(s){return t.$router.openPage("/")}}},[t._m(1),o("p",{staticClass:"name"},[t._v("首页")])]),o("div",{staticClass:"item cursom-shopcar",on:{click:function(s){return t.$router.openPage("/shoppingcart")}}},[t._m(2),o("p",{staticClass:"name"},[t._v("购物车")]),o("span",{directives:[{name:"show",rawName:"v-show",value:t.getShopCarLength>0,expression:"getShopCarLength > 0"}],staticClass:"num",class:{full:parseInt(t.getShopCarLength)>=99}},[t._v(t._s(parseInt(t.getShopCarLength)>=99?"99+":t.getShopCarLength))])])]),o("div",{staticClass:"right-box shop-car fl",on:{click:t.addShopCar}},[t._v("\n      加入购物车\n      "),o("span",{ref:"bool",staticClass:"bool bool-animate"})])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.hide,expression:"hide"}],staticClass:"loading-box",class:{active:t.loaded}},[o("span",{staticClass:"load-ani iconfont icon-jiazai"})])])},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"touch-item-box"},[o("div",{staticClass:"touch-item"},[o("span",{staticClass:"key"},[t._v("配件")])])])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("p",[o("span",{staticClass:"iconfont icon-shouye"})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("p",[o("span",{staticClass:"iconfont icon-gouwuche"})])}],n=(o("8e6e"),o("ac6a"),o("456d"),o("a481"),o("bd86")),a=o("91b0"),r=o("bc3a"),c=o.n(r);function p(t){if(t=t||{},!t.startPos)throw new Error("`startPos` is required in init options");if(!t.endPos)throw new Error("`endPos` is required in init options");t.duration=t.duration||2e3,this.opts=t,this.calCurvature()}p.prototype.calCurvature=function(){this.opts.driftX=this.opts.endPos.left-this.opts.startPos.left,this.opts.driftY=this.opts.endPos.top-this.opts.startPos.top;var t=-1*this.opts.startPos.top,s=this.power(this.opts.driftX,4),o=(4*t-2*this.opts.driftY)*this.power(this.opts.driftX,2),e=this.power(this.opts.driftY,2);this.opts.curvature=(-1*o+Math.sqrt(this.power(o,2)-4*s*e))/(2*s),this.opts.b=(this.opts.driftY-this.opts.curvature*this.opts.driftX*this.opts.driftX)/this.opts.driftX},p.prototype.power=function(t,s){return 1===s?t:t*this.power(t,s-1)},p.prototype.calPosition=function(t){var s,o;return s=this.opts.driftX*t,o=this.opts.curvature*s*s+this.opts.b*s,{left:Math.round(s+this.opts.startPos.left),top:Math.round(o+this.opts.startPos.top)}},p.prototype.start=function(){var t=this.opts,s=this,o=+new Date,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function i(){var e=+new Date,i=Math.min((e-o)/t.duration,1);if(1===i)return!1;var n=s.calPosition(i);return t.onStep&&t.onStep(n),!0}function n(){i()?e(n):"function"===typeof t.onFinish&&t.onFinish(t.endPos)}e(n)};var l=p,f=o("2f62"),u=o("e3dc");function h(t,s){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),o.push.apply(o,e)}return o}function d(t){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{};s%2?h(Object(o),!0).forEach((function(s){Object(n["a"])(t,s,o[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))}))}return t}var v={name:"detail",data:function(){return{info:{},loaded:!1,hide:!0}},watch:{$route:function(){this.getData()}},components:{swiper:a["a"]},computed:d({},Object(f["b"])(["getShopCarLength"])),methods:{getData:function(){var t=this;this.loaded=!1,this.hide=!0;var s=this.$router.currentRoute.params.id;s||this.$router.replace("/error/404"),c.a.get("./server/"+s+".json").then((function(s){t.info=s.data,t.loaded=!0,setTimeout((function(){t.hide=!1}),1e3)})).catch((function(){t.$router.replace("/error/404")}))},addShopCar:function(){var t=this,s=document.documentElement.clientWidth||document.body.clientWidth;t.$refs.bool.style.display="block";var o=new l({startPos:{left:t.$refs.bool.offsetLeft,top:t.$refs.bool.offsetTop},endPos:{left:t.$refs.bool.offsetLeft-4.1*s/10,top:t.$refs.bool.offsetTop},duration:300,onStep:function(s){var o="translate3d("+(s.left-t.$refs.bool.offsetLeft)+"px,"+(s.top-t.$refs.bool.offsetTop)+"px, 0px)";t.$refs.bool.style.webKitTransform=o,t.$refs.bool.style.transform=o},onFinish:function(){t.$refs.bool.style.display="none",t.shopCar.add(t.info)}});o.start()}},mounted:function(){this.shopCar=new u["a"](this.$store),this.getData()}},m=v,b=(o("a91b"),o("2877")),w=Object(b["a"])(m,e,i,!1,null,null,null);s["default"]=w.exports},a91b:function(t,s,o){"use strict";var e=o("6537"),i=o.n(e);i.a}}]);
//# sourceMappingURL=chunk-5d218ef6.5f70df8e.js.map