(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0306":function(t,e,i){"use strict";var n=i("a9fa"),r=i.n(n);r.a},"03ce":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},"4ce7":function(t,e,i){"use strict";i.r(e);var n=i("03ce"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"5fac":function(t,e,i){"use strict";i.r(e);var n=i("ab14"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"644c":function(t,e,i){var n=i("9812");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("70d84544",n,!0,{sourceMap:!1,shadowMode:!1})},6742:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},"692a":function(t,e,i){"use strict";i.r(e);var n=i("9120"),r=i("5fac");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("c2a0");var o,u=i("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"b991a6c4",null,!1,n["a"],o);e["default"]=s.exports},9120:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSwiper:i("d07c").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("u-swiper",{attrs:{list:t.list,effect3d:!0}}),i("uni-steps",{attrs:{options:[{title:"事件一"},{title:"事件二"},{title:"事件三"},{title:"事件四"}],active:1}})],1)},a=[]},9812:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-b991a6c4]{padding:%?40?%}',""]),t.exports=e},a9fa:function(t,e,i){var n=i("e6ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("7842371e",n,!0,{sourceMap:!1,shadowMode:!1})},ab14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[{image:"https://cdn.uviewui.com/uview/swiper/1.jpg",title:"昨夜星辰昨夜风，画楼西畔桂堂东"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/3.jpg",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],ccc:11}},created:function(){var t=this;setTimeout((function(){t.list=[{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/3.jpg",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],console.log(t.list)}),1e4);var e=function(t,e,i){var n=t+e;i(n)};e(1,2,(function(t){console.log(t)}))},methods:{}};e.default=n},c2a0:function(t,e,i){"use strict";var n=i("644c"),r=i.n(n);r.a},d07c:function(t,e,i){"use strict";i.r(e);var n=i("6742"),r=i("4ce7");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("0306");var o,u=i("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"71f0b7e9",null,!1,n["a"],o);e["default"]=s.exports},e6ed:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e}}]);