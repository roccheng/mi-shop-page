(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a1cc87"],{"28f3":function(e,t,i){"use strict";var s=i("7618"),c=i("d225"),n=i("b0b4"),o=function(){function e(){Object(c["a"])(this,e)}return Object(n["a"])(e,[{key:"setItem",value:function(e,t){"object"==Object(s["a"])(t)&&(t=JSON.stringify(t)),window.sessionStorage&&window.sessionStorage.setItem(e,t)}},{key:"removeItem",value:function(e){window.sessionStorage&&window.sessionStorage.removeItem(e)}},{key:"getItem",value:function(e){var t="";return window.sessionStorage&&(t=window.sessionStorage.getItem(e)),{toString:function(){return t},toJson:function(){var e={};try{e=JSON.parse(t)}catch(i){e=null}return e},toNumber:function(){return parseFloat(t)}}}},{key:"getItemOnce",value:function(e){var t=this.getItem(e);return this.removeItem(e),{toString:function(){return t},toJson:function(){var e={};try{e=JSON.parse(t)}catch(i){e=null}return e},toNumber:function(){return parseFloat(t)}}}}]),e}();t["a"]=o},"7abe":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-init home-index"},[i("header",{staticClass:"public-header"},[i("form",{staticClass:"search-box clear"},[e._m(0),i("div",{staticClass:"input-box",on:{click:function(t){return e.$router.openPage("/search")}}},[i("span",{staticClass:"iconfont icon-sousuo-copy absolute"}),i("input",{staticClass:"input-controller",attrs:{type:"text",placeholder:"搜索商品名称",readonly:""}})]),i("div",{staticClass:"myself-center fr",on:{click:function(t){return e.$router.openPage("/mine")}}},[i("span",{staticClass:"iconfont icon-smile"})])]),i("nav",{staticClass:"menu-box scroll-box-x noscroll"},[i("ul",{staticClass:"wrap-box clear"},e._l(e.navList,(function(t,s){return i("li",{key:s,staticClass:"item",class:{active:s==e.navListActiveIndex},on:{click:function(t){return e.navChange(s)}}},[i("span",[e._v(e._s(t.name))])])})),0)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.navListActiveIndex,expression:"navListActiveIndex == 0"}],ref:"view01",staticClass:"app-init scroll-box tab-box mi-tj footer-hack"},[i("swiper",{attrs:{list:e.bannerList}}),i("div",{staticClass:"nav-mi-tj clear"},[i("a",{staticClass:"fl",attrs:{href:"javascript:;"}},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png",alt:""},on:{click:function(t){return e.$router.openPage("/pay")}}})]),i("a",{staticClass:"fl",attrs:{href:"javascript:;"}},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png",alt:""},on:{click:function(t){return e.$router.openPage("/pay")}}})]),i("a",{staticClass:"fl",attrs:{href:"javascript:;"}},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png",alt:""},on:{click:function(t){return e.$router.openPage("/pay")}}})]),i("a",{staticClass:"fl",attrs:{href:"javascript:;"}},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png",alt:""},on:{click:function(t){return e.$router.openPage("/pay")}}})])]),i("div",{staticClass:"shop-item clear"},[i("img",{staticClass:"fl href",attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png",alt:""},on:{click:function(t){return e.$router.openPage("/detail/1001")}}}),i("img",{staticClass:"fr href",staticStyle:{"margin-bottom":"0.05rem"},attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252",alt:""},on:{click:function(t){return e.$router.openPage("/detail/1004")}}}),i("img",{staticClass:"fr href",attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png",alt:""},on:{click:function(t){return e.$router.openPage("/detail/1005")}}})]),i("div",{staticClass:"shop-item clear"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg",expression:"'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'"}],attrs:{alt:""},on:{click:function(t){return e.$router.openPage("/detail/1003")}}})]),i("div",{staticClass:"shop-item clear"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png'"}],attrs:{alt:""},on:{click:function(t){return e.$router.openPage("/detail/1006")}}})]),i("div",{staticClass:"shop-item clear"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png'"}],attrs:{alt:""},on:{click:function(t){return e.$router.openPage("/detail/1007")}}})]),i("div",{staticClass:"shop-item"},[i("div",{staticClass:"shop-box clear"},e._l(e.shoplist,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.navListActiveIndex,expression:"navListActiveIndex == 1"}],ref:"view02",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList01}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist01,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.navListActiveIndex,expression:"navListActiveIndex == 2"}],ref:"view03",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList02}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist02,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:3==e.navListActiveIndex,expression:"navListActiveIndex == 3"}],ref:"view04",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList03}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist03,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:4==e.navListActiveIndex,expression:"navListActiveIndex == 4"}],ref:"view05",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList04}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist04,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:5==e.navListActiveIndex,expression:"navListActiveIndex == 5"}],ref:"view06",staticClass:"app-init scroll-box tab-box footer-hack"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317010732422.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317010732422.png'"}],attrs:{alt:""},on:{click:function(t){return e.$router.openPage("/detail/1003")}}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg",expression:"'http://qiniu.verydog.cn//show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317012799998.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317012799998.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317013522274.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317013522274.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317005752430.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317005752430.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317011947232.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317011947232.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317014434073.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317014434073.png'"}],attrs:{alt:""}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:6==e.navListActiveIndex,expression:"navListActiveIndex == 6"}],ref:"view07",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList06}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist06,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:7==e.navListActiveIndex,expression:"navListActiveIndex == 7"}],ref:"view08",staticClass:"app-init scroll-box tab-box footer-hack"},[i("swiper",{attrs:{list:e.bannerList07}}),i("div",{staticClass:"shop-item"},[i("img",{attrs:{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png",alt:""}}),i("div",{staticClass:"shop-box clear"},e._l(e.shoplist07,(function(t,s){return i("div",{key:s,staticClass:"shop-box-item",on:{click:function(i){return e.$router.openPage(t.href)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"target.src"}],attrs:{alt:""}}),i("p",{staticClass:"title"},[e._v(e._s(t.title))]),i("p",{staticClass:"con"},[e._v(e._s(t.con))]),i("p",{staticClass:"money"},[i("span",{staticClass:"small"},[e._v("￥")]),e._v(" "+e._s(t.money)+"\n          ")])])})),0)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:8==e.navListActiveIndex,expression:"navListActiveIndex == 8"}],ref:"view09",staticClass:"app-init scroll-box tab-box footer-hack"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317154829739.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317154829739.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317155627636.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317155627636.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317160444789.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317160444789.png'"}],attrs:{alt:""}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://qiniu.verydog.cn//show.liluo.cc/2018011317161351928.png",expression:"'http://qiniu.verydog.cn//show.liluo.cc/2018011317161351928.png'"}],attrs:{alt:""}})])])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fl logo"},[i("span",{staticClass:"iconfont icon-xiaomi"})])}],n=i("91b0"),o=i("28f3"),a=new o["a"],l={data:function(){return{bannerList:[{src:"http://qiniu.verydog.cn//show.liluo.cc/01.png",href:"/detail/1001"},{src:"http://qiniu.verydog.cn//show.liluo.cc/02.jpg",href:"/detail/1002"},{src:"http://qiniu.verydog.cn//show.liluo.cc/03.jpg",href:"/detail/1003"},{src:"http://qiniu.verydog.cn//show.liluo.cc/04.jpg",href:"/detail/1004"}],shoplist:[{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"},{src:"http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg",title:"米家感应灯",con:"举步之明，光明立现",money:49,href:"/detail/1008"}],navList:[{name:"推荐"},{name:"手机"},{name:"智能"},{name:"电视"},{name:"电脑"},{name:"全面屏"},{name:"生活周边"},{name:"盒子"},{name:"艺术"}],navListActiveIndex:0,bannerList01:[{src:"http://qiniu.verydog.cn//show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg",href:"/detail/1007"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213275295675.png",href:"/detail/1009"}],shoplist01:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png",title:"红米Note 4X 32GB",con:"多彩金属 / 超长续航",money:899,href:"/detail/1010"}],bannerList02:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011213533255816.png",href:"/detail/1011"}],shoplist02:[{src:"http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg",title:"米家四位四控插线板",con:"四位分控，随用随开",money:89,href:"/detail/1012"},{src:"http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg",title:"米家四位四控插线板",con:"四位分控，随用随开",money:89,href:"/detail/1012"},{src:"http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg",title:"米家四位四控插线板",con:"四位分控，随用随开",money:89,href:"/detail/1012"},{src:"http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg",title:"米家四位四控插线板",con:"四位分控，随用随开",money:89,href:"/detail/1012"}],bannerList03:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg",href:"/detail/1013"}],shoplist03:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png",title:"小米电视4A 43英寸",con:"全高清 HDR，64位处理器",money:1999,href:"/detail/1004"}],bannerList04:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011316542272196.png",href:"/detail/1014"}],shoplist04:[{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"},{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"},{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"},{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"},{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"},{src:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:'13.3"笔记本i5 独显',con:"指纹解锁，全金属机身",money:5199,href:"/detail/1014"}],bannerList06:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083831934.png",href:"/detail/1015"}],shoplist06:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1016"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1016"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1016"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1016"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1016"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png",title:"8H护颈乳胶枕 Z2",con:"多重新科技  升级好睡眠",money:239,href:"/detail/1015"}],bannerList07:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317121511939.png",href:"/detail/1017"}],shoplist07:[{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png",title:"小米影视会员卡",con:"畅享海量片库",money:498,href:"/detail/1018"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png",title:"小米影视会员卡",con:"畅享海量片库",money:498,href:"/detail/1018"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png",title:"小米影视会员卡",con:"畅享海量片库",money:498,href:"/detail/1018"},{src:"http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png",title:"小米影视会员卡",con:"畅享海量片库",money:498,href:"/detail/1018"}]}},components:{swiper:n["a"]},mounted:function(){var e=this;this.navListActiveIndex=a.getItemOnce("home-index-nowIndex").toNumber()||0,setTimeout((function(){e.$refs.view01.scrollTop=a.getItemOnce("home-index-view01").toNumber()||0,e.$refs.view02.scrollTop=a.getItemOnce("home-index-view02").toNumber()||0,e.$refs.view03.scrollTop=a.getItemOnce("home-index-view03").toNumber()||0,e.$refs.view04.scrollTop=a.getItemOnce("home-index-view04").toNumber()||0,e.$refs.view05.scrollTop=a.getItemOnce("home-index-view05").toNumber()||0,e.$refs.view06.scrollTop=a.getItemOnce("home-index-view06").toNumber()||0,e.$refs.view07.scrollTop=a.getItemOnce("home-index-view07").toNumber()||0}),10)},methods:{navChange:function(e){this.navListActiveIndex=e}},beforeRouteLeave:function(e,t,i){a.setItem("home-index-view01",this.$refs.view01.scrollTop),a.setItem("home-index-view02",this.$refs.view02.scrollTop),a.setItem("home-index-view03",this.$refs.view03.scrollTop),a.setItem("home-index-view04",this.$refs.view04.scrollTop),a.setItem("home-index-view05",this.$refs.view05.scrollTop),a.setItem("home-index-view06",this.$refs.view06.scrollTop),a.setItem("home-index-view07",this.$refs.view07.scrollTop),a.setItem("home-index-nowIndex",this.navListActiveIndex),i()}},r=l,p=(i("ec8a"),i("2877")),h=Object(p["a"])(r,s,c,!1,null,null,null);t["default"]=h.exports},b27e:function(e,t,i){},ec8a:function(e,t,i){"use strict";var s=i("b27e"),c=i.n(s);c.a}}]);
//# sourceMappingURL=chunk-26a1cc87.fe137c58.js.map